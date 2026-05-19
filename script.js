const courses = [
    {
        name: "Course 1",
        assignments: [
            { name: "Homework 1", score: 95, max: 100 },
            { name: "Midterm", score: 88, max: 100 }
        ]
    },
    {
        name: "Course 2",
        assignments: [
            { name: "Homework 1", score: 95, max: 100 },
            { name: "Midterm", score: 88, max: 100 }
        ]
    },
    {
        name: "Course 3",
        assignments: [
            { name: "Homework 1", score: 95, max: 100 },
            { name: "Midterm", score: 88, max: 100 }
        ]
    }
];
const app = document.getElementById("app");

courses.forEach(course => {
    const courseDiv = document.createElement("section");

    courseDiv.innerHTML = `
    <button>${course.name}</button>
  `;

    app.appendChild(courseDiv);
});