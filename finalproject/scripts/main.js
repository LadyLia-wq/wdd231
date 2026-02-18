const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

const container = document.querySelector("#resourcesContainer");

async function loadResources() {
  if (!container) return;

  try {
    const response = await fetch("data/resources.json");
    const data = await response.json();

    data.forEach(item => {
      container.innerHTML += `
        <div class="card">
            <h3>${item.name}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><strong>Level:</strong> ${item.level}</p>

            <button class="detailsBtn"
            data-name="${item.name}"
            data-category="${item.category}"
            data-level="${item.level}"
            data-link="${item.website}">
            View Details
            </button>
        </div>
      `;
    });

  } catch (error) {
    container.innerHTML = "<p>Failed to load resources.</p>";
    console.error(error);
  }
}

/* Highlight active navigation link */
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

loadResources();

/* Modal elements */
const modal = document.querySelector("#resourceModal");
const closeModal = document.querySelector("#closeModal");

/* Handle card clicks */
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("detailsBtn")) {

    const resourceData = {
      name: e.target.dataset.name,
      category: e.target.dataset.category,
      level: e.target.dataset.level,
      link: e.target.dataset.link
    };

    /* Save to local storage */
    localStorage.setItem("lastResource", JSON.stringify(resourceData));

    openModal(resourceData);
  }
});

/* Open modal helper */
function openModal(resource) {
  document.getElementById("modalTitle").textContent =
    resource.name;

  document.getElementById("modalCategory").textContent =
    "Category: " + resource.category;

  document.getElementById("modalLevel").textContent =
    "Level: " + resource.level;

  document.getElementById("modalLink").innerHTML =
    `<a href="${resource.link}" target="_blank" class="modal-visit-btn">
      Visit Website
    </a>`;

  modal.style.display = "block";
}

/* Load saved resource on page load */
const savedResource = localStorage.getItem("lastResource");

if (savedResource) {
  openModal(JSON.parse(savedResource));
}

/* Close modal */
closeModal.onclick = () => modal.style.display = "none";

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
