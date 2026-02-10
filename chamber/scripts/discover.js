import { places } from "../data/discover.mjs";

const grid = document.getElementById("discover-grid");

places.forEach(place => {
    const card = document.createElement("article");

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;

    grid.appendChild(card);
});

/* Visit message logic */
const visitBox = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diffDays = Math.floor((now - lastVisit) / 86400000);

    if (diffDays < 1) {
        visitBox.textContent = "Back so soon! Awesome!";
    } else {
        visitBox.textContent =
            diffDays === 1
            ? "You last visited 1 day ago."
            : `You last visited ${diffDays} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);
