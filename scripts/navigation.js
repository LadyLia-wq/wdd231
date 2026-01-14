const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.classList.toggle("open");

  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", !expanded);
});
