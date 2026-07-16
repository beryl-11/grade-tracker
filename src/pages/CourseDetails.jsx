import { useParams } from "react-router-dom";
import courses from "../data/courses.json"

export default function CourseDetails() {
    const params = useParams(); // TODO: Use the course ID to access the name, grade, and assignments associated with the course
    const semester = params.semester, courseId = params.courseId;
    const courseToDisplay = courses.find((semesterGroup) => semesterGroup.semester === semester).courseList.find((course) => course.courseId === courseId);

    return <section id="grade-details">
        <header>
            <h1 className="page-title" id="course-view-name">{courseToDisplay.courseName}</h1>
            <p className="overall-grade">Your estimated grade for this course is {courseToDisplay.grade}.</p>
        </header>

        <hr />

        <section>
            <div className="table-wrapper">
                <table id="course-details-table">
                    <thead>
                        <tr>
                            <th>Assignment Name</th>
                            <th>Category</th>
                            <th>Weight</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lab 0</td>
                            <td>Lab</td>
                            <td>1</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>Lab 1</td>
                            <td>Lab</td>
                            <td>1</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>Homework Assignment 1</td>
                            <td>Homework</td>
                            <td>1</td>
                            <td>98%</td>
                        </tr>
                        <tr>
                            <td>Quiz</td>
                            <td>Assessments</td>
                            <td>0.5</td>
                            <td>80%</td>
                        </tr>
                        <tr>
                            <td>Quiz</td>
                            <td>Assessments</td>
                            <td>0.5</td>
                            <td>80%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </section>
}