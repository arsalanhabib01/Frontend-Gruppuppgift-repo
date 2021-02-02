let container = document.querySelector('.container');
let count = document.getElementById('count');
let price = document.getElementById('price');

// Seat select event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    let selectedSeats = document.querySelectorAll('.row .selected');
    let selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    
    let movieSelect = document.getElementById('age');
    let ticketPrice = +movieSelect.value;
    price.innerText = selectedSeatsCount * ticketPrice;
   // updateSelectedSeatsCount();
  }
});

// bokning button function
function myButton() {
  console.log("not working at the moment.....");
}

// working on it..............