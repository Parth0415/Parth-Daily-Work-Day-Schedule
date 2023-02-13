// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var idHourList = [
    "hour-9",
    "hour-10",
    "hour-11",
    "hour-12",
    "hour-13",
    "hour-14",
    "hour-15",
    "hour-16",
    "hour-17",
  ];

  //var mainContainerBox = document.getElementById("mainContainerBox");
  // TODO: Add code to display the current date in the header of the page.

  $("#currentDay").html(moment().format("MMMM Do YYYY HH:mm"));

  var currentHour = "hour-" + `${moment().hour()}`;

  //let hourContainer  = document.getElementsByClassName("row time-block")[0];

  console.log(currentHour);

  var indexOfCurrentHour = idHourList.indexOf(currentHour);

  if (indexOfCurrentHour == -1) {
    indexOfCurrentHour = 100;
  }

  for (var i = 0; i < idHourList.length; i++) {
    let hourDiv = document.getElementById(idHourList[i]);
    let saveButton = document.getElementsByClassName("saveBtn")[i];
    let descriptionEl = document.getElementsByClassName("description")[i];

    descriptionEl.textContent = localStorage.getItem(hourDiv.id);

    saveButton.addEventListener("click", saveInLocalStorage);

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    if (i < indexOfCurrentHour) {
      hourDiv.className += " past";
    } else if (i > indexOfCurrentHour) {
      hourDiv.className += " future";
    } else if (i == indexOfCurrentHour) {
      hourDiv.className += " present";
    }
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function saveInLocalStorage() {
    for (var i = 0; i < idHourList.length; i++) {
      let descriptionEl = document.getElementsByClassName("description")[i];
      let hourDiv = document.getElementById(idHourList[i]);
      // TODO: Add code to get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements. HINT: How can the id
      // attribute of each time-block be used to do this?
      //
      localStorage.setItem(hourDiv.id, descriptionEl.value);
    }
  }
  // function divClick(event){
  //   var something= event.target.value;
  //   console.log(something);
  // }
  // descriptionEl.addEventListener("click", divClick);
});
