// Timestamp
document.getElementById("timestamp").value =
    new Date().toISOString();

// Open modals
document.querySelectorAll(".modal-open").forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.dataset.modal;
        document.getElementById(modalId).showModal();
    });
});

// Close modals
document.querySelectorAll(".modal-close").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest("dialog").close();
    });
});
