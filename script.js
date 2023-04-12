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

    trips.forEach((trip) => {
        const tripElement = document.createElement("div");
        tripElement.textContent = `${trip.departure} - ${trip.arrival} (${trip.date})`;
        results.appendChild(tripElement);
    });
}

document.querySelector