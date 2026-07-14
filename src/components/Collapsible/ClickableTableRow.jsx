function ClickableTableRow() {
    function rowClickHandler() {
        window.location.href = "/details";
    }

    return <tr data-href="/details" onClick={rowClickHandler}>
        <td className="course-name">Example Course #</td>
        <td className="course-grade">??</td>
    </tr>
}

export default ClickableTableRow