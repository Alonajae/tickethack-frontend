async function getCart() {
    const response = await fetch("/api/cart");
    const cart = await response.json();
    displayCart(cart);
  }
  
  function displayCart(cart) {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";
  
    cart.forEach((trip) => {
      const tripElement = document.createElement("div");
      tripElement.textContent = `${trip.departure} - ${trip.arrival} (${trip.date})`;
      cartElement.appendChild(tripElement);
    });
  }
  
  document.getElementById("checkout").addEventListener("click", async () => {
    await fetch("/api/cart/checkout", { method: "POST" });
    window.location.href = "/bookings";
  });
  
  getCart();
  