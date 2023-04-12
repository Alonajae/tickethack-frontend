flatpickr('.date-picker', {
    dateFormat: 'd/m/Y'
});

const results = document.getElementById("results");
const departure = document.getElementById("departure").value;
const arrival = document.getElementById("arrival").value;
const date = document.getElementById("date").value;

document.querySelector("#search-btn").addEventListener("click", () => {
    fetch('http://localhost:3000/trips', {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({ departure: departure, arrival: arrival, date: date })

    })
        .then(response => response.json())
        .then(data => {
            if (data) {
                results.innerHTML = "";
                data.forEach((trip) => {
                    results.innerHTML += `
                    <div class="trip-container"> 
                    <p>${trip.departure} > ${trip.arrival}</p>
                    <p>${trip.date}</p>
                    <button class="book-btn" type=button>
                    `
                    tripElement.textContent = `${trip.departure} - ${trip.arrival} (${trip.date})`;
                    results.appendChild(tripElement);
                });
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