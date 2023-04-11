async function getBookings() {
    const response = await fetch("/api/bookings");
    const bookings = await response.json();
    displayBookings(bookings);
  }
  
  function displayBookings(booking) {
    const bookingsElement = document.getElementById("bookings");
    bookingsElement.innerHTML = "";
  }
  
    bookings.forEach((booking) => {
      const bookingElement = document.createElement("div");
      bookingElement.textContent = `${booking.departure} - ${booking.arrival} 
  
    }