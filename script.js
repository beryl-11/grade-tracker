// import courses from "./courses.json" with { type: "json" };

// console.log(courses["Fall 2025"][0].name + " " + courses["Fall 2025"][0].grade);

/* Collapsible Content Script*/
let collapsibles = document.querySelectorAll(".collapsible-btn");
collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", function () {
        collapsible.classList.toggle("expanded");
        let content = collapsible.nextElementSibling;
        content.classList.toggle("hidden");
    })
})

/* Link Table Rows Using JQuery */
$(document).ready(function () {
    $(document.body).on("click", "tr[data-href]", function () {
        window.location.href = this.dataset.href;
    });
});