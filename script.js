const courses = [
    {
        name: "Course 1",
        credit : 4,
        semester : "Fall 2025",
        grade : "A+",
        assignments: [
            { name: "Homework 1", score: 95, max: 100 },
            { name: "Midterm", score: 88, max: 100 }
        ]
    },
    {
        name: "Course 2",
        credit : 4,
        semester : "Spring 2026",
        grade : "A+",
        assignments: [
            { name: "Homework 1", score: 95, max: 100 },
            { name: "Midterm", score: 88, max: 100 }
        ]
    },
    {
        name: "Course 3",
        credit : 2,
        semester : "Fall 2025",
        grade : "A-",
        assignments: [
            { name: "Homework 1", score: 95, max: 100 },
            { name: "Midterm", score: 88, max: 100 }
        ]
    }
];
const courseNames = document.getElementById("course-names");

courses.forEach(course => {
    const courseDiv = document.createElement("section");

    courseDiv.innerHTML = `
    <h2 class="courseName">${course.name} ${course.grade}</h2>
  `;

    courseNames.appendChild(courseDiv);
});