function ClickableTableRow(props) {
    function rowClickHandler() {
        window.location.href = "/details";
    }

    return <tr data-href="/details" onClick={rowClickHandler}>
        <td className="course-name">{props.courseName}</td>
        <td className="course-grade">{props.courseGrade}</td>
    </tr>
}

export default ClickableTableRow