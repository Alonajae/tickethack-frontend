document.getElementById("search-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const departure = document.getElementById("departure").value;
    const arrival = document.getElementById("arrival").value;
    const date = document.getElementById("date").value;

    const response = await fetch(`/api/trips?departure=${departure}&arrival=${arrival}&date=${date}`);
    const trips = await response.json();

    displayResults(trips);
});

function displayResults(trips) {
    const results = document.getElementById("results");
    results.innerHTML = "";
    fetch('http://localhost:3000/trips', {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(data)

    })
    .then(response => response.json())
    .then(data => {
        data.forEach((trip) => {
            const tripElement = document.createElement("div");
            tripElement.textContent = `${trip.departure} - ${trip.arrival} (${trip.date})`;
            results.appendChild(tripElement);
        });
    })
}
flatpickr('.date-picker', {
    dateFormat: 'd/m/Y'
});
