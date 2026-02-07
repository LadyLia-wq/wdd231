document.querySelectorAll(".modal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById(btn.dataset.modal).showModal();
    });
});

document.querySelectorAll("dialog button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest("dialog").close();
    });
});
