flatpickr('.date-picker', {
    dateFormat: 'd/m/Y'
});

let results = document.querySelector("#results")

document.querySelector("#search-btn").addEventListener("click", () => {
    let departure = document.getElementById("departure").value;
    let arrival = document.querySelector("#arrival").value;
    let date = document.querySelector("#date").value;
    fetch('http://localhost:3000/trips', {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({ departure: departure, arrival: arrival, date: date })

    })
        .then(response => response.json())
        .then(data => {
            results.innerHTML = ""
            if (data) {
                data.forEach((trip) => {
                    results.innerHTML += `
                    <div class="trip-container"> 
                    <p>${trip.departure} > ${trip.arrival}  ${trip.date}  ${trip.price}€</p>
                    <button class="book-btn" type=button>Book</button>
                    </div>
                    `
                })
            } else {
                results.innerHTML += `
                <div id="img-container">
                <img src="./images/ntofound.png">
                </div>
                <div class="green-line"></div>
                <h3>No trip found.</h3>
                `
            }
        })
});


/*
 e.preventDefault();
    const departure = document.getElementById("departure").value;
    const arrival = document.getElementById("arrival").value;
    const date = document.getElementById("date").value;

    const response = await fetch(`/api/trips?departure=${departure}&arrival=${arrival}&date=${date}`);
    const trips = await response.json();

    displayResults(trips);
*/