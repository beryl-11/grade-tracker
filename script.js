const courses = [
    {
        name: "Math 101",
        assignments: [
            { name: "Homework 1", score: 95, max: 100 },
            { name: "Midterm", score: 88, max: 100 }
        ]
    }
];
const app = document.getElementById("app");

courses.forEach(course => {
    const courseDiv = document.createElement("div");

    courseDiv.innerHTML = `
    <h2>${course.name}</h2>
  `;

    app.appendChild(courseDiv);
});