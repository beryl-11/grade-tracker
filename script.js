// import courses from "./courses.json" with { type: "json" };
// temp courses var to replace import statement
const courses = {}
//     "Fall 2025": [
//         {
//             "courseName": "F25C1", "credit": 4, "grade": "A+", "assignments": [
//                 { "assignmentName": "Homework 1", "score": 95, "max": 100, "weight": 1 },
//                 { "assignmentName": "Midterm", "score": 88, "max": 100, "weight": 1 }
//             ]
//         },
//         {
//             "courseName": "F25C2", "credit": 2, "grade": "A-", "assignments": [
//                 { "assignmentName": "Homework 1", "score": 95, "max": 100, "weight": 1 },
//                 { "assignmentName": "Midterm", "score": 88, "max": 100, "weight": 1 }
//             ]
//         }
//     ],

//     "Spring 2026": [
//         {
//             "courseName": "S26C1", "credit": 4, "grade": "A+", "assignments": [
//                 { "assignmentName": "Homework 1", "score": 95, "max": 100, "weight": 1 },
//                 { "assignmentName": "Midterm", "score": 88, "max": 100, "weight": 1 }
//             ]
//         }
//     ]
// }

/*--------------------------------------------Start--------------------------------------------*/
/* Function definitions */
let isEmpty = (obj) => Object.keys(obj).length === 0;

/* Inner HTML for home view */
let gradeListContainer = document.getElementById("details-list");

if (isEmpty(courses)) {
    /* TODO: Make this look better using CSS */
    gradeListContainer.innerText = "Add a course to view the list.";

} else {
    for (const semester in courses) {
        // create new semester group
        const newSemesterGroup = document.createElement("div");
        newSemesterGroup.classList.add("semester-group");
        gradeListContainer.append(newSemesterGroup);

        // create a collapsible button and table for the semester group
        const newButton = document.createElement("button");
        newButton.type = "button";
        newButton.classList.add("collapsible-btn");
        newButton.textContent = semester;

        const newCollapsibleTable = document.createElement("table");
        newCollapsibleTable.classList.add("collapsible-content", "collapsed");

        newSemesterGroup.append(newButton, newCollapsibleTable);

        // create the rows of the table
        courses[semester].forEach((course) => {
            const newRow = document.createElement("tr");
            newCollapsibleTable.append(newRow);

            // row information
            const newRowCourseName = document.createElement("td"), newRowCourseGrade = document.createElement("td");
            newRowCourseName.textContent = course["courseName"];
            newRowCourseName.classList.add("course-name");

            newRowCourseGrade.textContent = course["grade"];
            newRowCourseGrade.classList.add("course-grade");

            newRow.append(newRowCourseName, newRowCourseGrade);
        })
    }
}

/* Settings */
let settingsButton = document.getElementById("settings-btn"), settingsModal = document.getElementById("settings-modal");
settingsButton.addEventListener("click", () => {
    settingsModal.classList.remove("hidden");

    let exitButton = settingsModal.querySelector(".modal-exit-btn");
    exitButton.addEventListener("click", () => settingsModal.classList.add("hidden"), { once: true });
})

/* Toolbar */
// Add Course Button
let addCourseButton = document.getElementById("add-course-btn"), addCourseModal = document.getElementById("add-course-modal");
addCourseButton.addEventListener("click", () => {
    addCourseModal.classList.remove("hidden");

    let exitButton = addCourseModal.querySelector(".modal-exit-btn");
    exitButton.addEventListener("click", () => addCourseModal.classList.add("hidden"), { once: true });
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
        document.getElementById("home-view").toggleAttribute("hidden");
        console.log(document.getElementById);
        document.getElementById("course-view").toggleAttribute("hidden");
        // window.location.href = this.dataset.href;
    });
});