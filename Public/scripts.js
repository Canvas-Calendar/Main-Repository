let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function addEvent() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    //cell.classList.add("bg-info");
                    cell.classList.add("bg-danger")
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}

var accountType = sessionStorage.getItem("accountType");

function logoutFunction(){
    if(accountType == "Google"){
        signOut();
      }
      else{
        firebase.auth().signOut().then(function () {
          location.reload();
          window.location.href = 'https://canvas-calendar-4ea54.web.app/index.html'//put url here
        })
        .catch(function (error) {
          console.log(err);
          alert(err);
        });
      }
}

function signOut() { //Sign Out Function
    gapi.auth2.getAuthInstance().signOut().then(function() {
        console.log('User signed out')
        window.location.href = 'https://canvas-calendar-4ea54.web.app/index.html'//put url here
    })
}

function onLoad() {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
}

function viewSelectedEvent(){
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
    document.getElementById("myPopup2").innerHTML = today;
}



