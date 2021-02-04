


var container = document.querySelector('.container');
var seats = document.querySelectorAll('.row .seat:not(.occupied)');
var count = document.getElementById('count');
var price = document.getElementById('price');
var ageSelect = document.getElementById('age');
var movieSelect = document.getElementById('movie');
var tid = document.querySelector('.time');
var selectedDay = document.getElementById('day');
let selectedTime;
var bookingArray = [];

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


   tid.onclick = function () {
     const rbs = document.querySelectorAll('input[name="contact"]');
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedTime = rb.value;
                    break;
                }
            }

        };




function bookingSelectedSeats(){
  var selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  var name = window.prompt("Enter your name to book your tickets: ");

  if (name === null)
    alert("Your booking is cancelled....");
  else if (name === "")
    alert("Must be entered the Name...");
  else if (selectedTime === undefined)
    alert("Please Select the time first...");
    
  if (name !== null && name !== "" && selectedTime !== undefined
    && selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('occupied');
        var x = localStorage.removeItem('selectedSeats');
      }
    });
    bookingArray.push({ "name": name }, { "seat no": selectedSeats }, { "time": selectedTime },
      { "Total Price": price.innerText }, { "Number of tickets": count.innerText });
    alert("Selected Seat no: " + selectedSeats + " booked by the name: " + name);
    
    // Mahran start from here jsonString i file .json
    var jsonString = JSON.stringify(bookingArray);
    // console.log(jsonString);
     alert("JSON STRING : " +jsonString);
  }
}


  function updateSelectedSeatsCount(){
  var selectedSeats = document.querySelectorAll('.row .selected:not(.occupied)');
  var seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  
  var selectedSeatsCount = selectedSeats.length;
  var ticketPrice = +ageSelect.value;
  count.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * ticketPrice;
}


  
function myButton() {
  bookingSelectedSeats();
}

