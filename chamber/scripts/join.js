// Timestamp
document.getElementById("timestamp").value =
    new Date().toISOString();

// Modal controls
function openModal(id) {
    document.getElementById(id).showModal();
}

function closeModal(id) {
    document.getElementById(id).close();
}
