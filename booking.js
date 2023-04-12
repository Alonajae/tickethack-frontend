const dateField = document.getElementById("date");
const currentDate = new Date();
dateField.value = formatDate(currentDate);

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
  
    return `${year}-${month}-${day}`;
  }
  


async function getBookings() {
    const response = await fetch("/api/bookings");
    const bookings = await response.json();
    displayBookings(bookings);
  }





//   functionformatDate(date) {
//     const day = date.getDate().toString().padStart(2, "0")
//     const month = (date.getMonth() + 1).toString().padStart(2, "0");
//     const year = date.getFullYear();

//     return`${day}/${month}/${year}`;
//   }
  
  function displayBookings(booking) {
    const bookingsElement = document.getElementById("bookings");
    bookingsElement.innerHTML = "";
  }
  
    bookings.forEach((booking) => {
      const bookingElement = document.createElement("div");
      bookingElement.textContent = `${booking.departure} - ${booking.arrival} 
  
    }