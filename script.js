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
            if (data.result=== true) {
                results.innerHTML = ""
                for (let i=0; i< data.allTrips.length ; i++) {
                    results.innerHTML += `
                    <div class="trip-container"> 
                    <p>${data.allTrips[i].departure} > ${data.allTrips[i].arrival}  ${data.allTrips[i].date}  ${data.allTrips[i].price}€</p>
                    <button class="book-btn" type=button>Book</button>
                    </div>
                    `
                }
            } else {
                results.innerHTML = `
                <div id="img-container">
                <img src="./images/notfound.png">
                </div>
                <div class="green-line"></div>
                <h3>No trip found.</h3>
                `
            }
        })
});
