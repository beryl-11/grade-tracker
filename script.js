// import courses from "./courses.json" with { type: "json" };

/* Settings */
let settingsButton = document.getElementById("settings-btn"), settingsModal = document.getElementById("settings-modal");
settingsButton.addEventListener("click", () => {
    settingsModal.classList.remove("hidden");
})

// modal exit buttons
let exitButtons = document.querySelectorAll(".modal-exit-btn");
exitButtons.forEach((button) => {
    button.addEventListener("click", () => button.parentElement.classList.add("hidden"));
})

/* Collapsible Button and Content Script */
let collapsibles = document.querySelectorAll(".collapsible-btn");
collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", function () {
        collapsible.classList.toggle("expanded");
        let content = collapsible.nextElementSibling;
        content.classList.toggle("collapsed");
    })
})

/* Link Table Rows Using JQuery */
$(document).ready(function () {
    $(document.body).on("click", "tr[data-href]", function () {
        window.location.href = this.dataset.href;
    });
});