const spotlightContainer = document.getElementById("spotlight-container");

async function loadSpotlights() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const eligible = data.members.filter(
        member => member.membership === "Gold" || member.membership === "Silver"
    );

    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/companies/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><strong>${member.membership}</strong> Member</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        spotlightContainer.appendChild(card);
    });
}

loadSpotlights();
