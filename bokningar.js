


// here all the required declarations
let container = document.querySelector('.container');
let seats = document.querySelectorAll('.row .seat:not(.occupied)');
let count = document.getElementById('count');
let price = document.getElementById('price');
let selectedAge = document.getElementById('age');
let selectedMovie = document.getElementById('movie');
let time = document.querySelector('.time');
let selectedDay = document.getElementById('day');

let ticketDetails = [];
let selectedTime;

// Seat select event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedSeatsCount();
  }
});

// time select event
time.onclick = function () {
  const rbs = document.querySelectorAll('input[name="contact"]');
  for (const rb of rbs) {
    if (rb.checked) {
      selectedTime = rb.value;
      break;
    }
  }

};



// this function book your tickets for the selected movie
function bookingSelectedSeats() {
  let selectedSeats = localStorage.getItem('selectedSeats');
  let name = window.prompt("Enter your name to book your tickets: ");

  if (name === null)
    alert("Booking is cancelled....");
  else if (name === "")
    alert("The Name must be entered...");
  else if (selectedMovie.value === "")
    alert("Please fill all the requried blanks...");
  else if (selectedDay.value === "")
    alert("Please fill all the required blanks...");
  else if (selectedAge.value === "")
    alert("Please fill all the required blanks...");
  else if (selectedTime === undefined)
    alert("Please fill all the required blanks...");


  if (name !== null && name !== "" && selectedTime !== undefined && selectedMovie.value !== ""
    && selectedDay.value !== "" && selectedAge.value !== ""
    && selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('occupied');
        localStorage.removeItem('selectedSeats');
      }
    });
    ticketDetails.push({ "Name": name }, { "Movie Name": selectedMovie.value }, { "Seat No": selectedSeats },
      { "Time": selectedTime }, { "Day": selectedDay.value }, { "Total Price": price.innerText },
      { "Number of Tickets": count.innerText });
    alert("Ticket is now booked by: " + name + "\n" +
      "Movie: " + selectedMovie.value + "\n" +
      "Seat: " + selectedSeats + "\n" +
      "Day: " + selectedDay.value + "\n" +
      "Time: " + selectedTime);


    // Mahran kolla spara jsonString i file .json
    let jsonString = JSON.stringify(ticketDetails, null, ' ');
    //console.log(jsonString);
  }
}

// this function counts the number of seats and their total price 
function updateSelectedSeatsCount() {
  let selectedSeats = document.querySelectorAll('.row .selected:not(.occupied)');
  let seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  let selectedSeatsCount = selectedSeats.length;
  let ticketPrice = +selectedAge.value;
  count.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * ticketPrice;
}


// booking button function
function myButton() {
  bookingSelectedSeats();
}

