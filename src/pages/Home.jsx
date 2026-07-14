import Collapsible from "../components/Collapsible/Collapsible"
// import courses from "../data/courses.json"

function Home() {
  const courses = [
    {
      semester: "Fall 2025",
      courseList: [
        {
          "courseName": "F25C1: Introduction to Fall 2025", "credit": 4, "grade": "A+", "assignments":
            [
              { "assignmentName": "Homework 1", "score": 95, "max": 100, "weight": 1 },
              { "assignmentName": "Midterm", "score": 88, "max": 100, "weight": 1 }
            ]
        },
        {
          "courseName": "F25C2: Another Fall Semester Course", "credit": 2, "grade": "A-", "assignments": [
            { "assignmentName": "Homework 1", "score": 95, "max": 100, "weight": 1 },
            { "assignmentName": "Midterm", "score": 88, "max": 100, "weight": 1 }
          ]
        }
      ]
    },
    {
      semester: "Spring 2026",
      courseList: [
        {
          "courseName": "S26C1: First Course of the Spring Semester", "credit": 4, "grade": "A+", "assignments": [
            { "assignmentName": "Homework 1", "score": 95, "max": 100, "weight": 1 },
            { "assignmentName": "Midterm", "score": 88, "max": 100, "weight": 1 }
          ]
        }
      ]
    }
  ]

  return <section id="home">
    <header id="intro">
      <h1 className="page-title">Hello, [name].</h1>
      <p className="overall-grade" id="overall-gpa-statement">Your estimated current GPA is [3.00].</p>
    </header>

    <hr />

    <section id="grade-details">
      <h1>Details</h1>

      <div className="grid-container" id="grade-details-grid">
        <div className="flex-container" id="details-list">
          {courses.map((semesterGroup) => <Collapsible semester={semesterGroup.semester} courseList={semesterGroup.courseList} />)}
        </div>
        <div className="graph-wrapper">
          <div className="circle-placeholder" id="gpa-breakdown-graph"></div>
        </div>

      </div>
    </section>
  </section>
}

export default Home