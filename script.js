const courses = [
    {
        name: "Course 1",
        credit: 4,
        semester: "Fall 2025",
        grade: "A+",
        assignments: [
            { name: "Homework 1", score: 95, max: 100 },
            { name: "Midterm", score: 88, max: 100 }
        ]
    },
    {
        name: "Course 2",
        credit: 4,
        semester: "Spring 2026",
        grade: "A+",
        assignments: [
            { name: "Homework 1", score: 95, max: 100 },
            { name: "Midterm", score: 88, max: 100 }
        ]
    },
    {
        name: "Course 3",
        credit: 2,
        semester: "Fall 2025",
        grade: "A-",
        assignments: [
            { name: "Homework 1", score: 95, max: 100 },
            { name: "Midterm", score: 88, max: 100 }
        ]
    }
];
const courseNames = document.getElementById("course-names");

courses.forEach(course => {
    /* not working but attempting
    courses.forEach(semester => {
    const courseDiv1 = document.createElement("div");
    courseDiv1.innerHTML = `<button>${semester}</button>`;
    courseNames.appendChild(courseDiv1);
    print(semester);
    courses[semester].forEach(course => {
        const courseDiv = document.createElement("div");

        courseDiv.innerHTML = `
            <h2 class="courseName"><a href="#${course.name}">${course.name} ${course.grade}</a></h2>
            `;

        courseNames.appendChild(courseDiv);
    });
});*/
    const courseDiv = document.createElement("table");

    courseDiv.innerHTML = `
    <tr class="courseName">
        <td><a href="#${course.name}">${course.name}</a></td>
        <td>${course.grade}</td>
        </tr>
  `;

    courseNames.appendChild(courseDiv);
});