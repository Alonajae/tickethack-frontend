/*async function getCart() {
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
  */

fetch('http://localhost:3000/cart')
  .then(response => response.json())
  .then(data => {
    if (data.cart.length !== 0) {
      console.log(data)
      let sum = 0;
      for (let i = 0; i < data.cart; i++) {
        document.querySelector("#ticket-container").innerHTML += `
    <div class='tickets'>
    <p> ${data.cart[i].departure}>${data.cart[i].arrival}        ${data.cart[i].date}         ${data.cart[i].price}€</p>
    <span class='deleteCart'>X</span>
    </div>
    `
    sum += data.cart[i].price
      }
      document.querySelector("#ticket-container").innerHTML += `
      <div id="total"> 
      <p>Total:${sum}€</p>
      <button id="purchase-btn" type='button'>Purchase</button>
      </div>                  
      `
    }
  })


