import "../../css/Collapsible.css";
import { Link } from "react-router-dom";
import ClickableTableRow from "./ClickableTableRow";

function Collapsible(props) {
    // TODO: Make function toggle the collapsible (perhaps using states)
    function collapsibleHandler() {
        alert("collapse toggle")
    }

    const { semester, courseList } = props;

    return <div className="collapsible">
        <button type="button" className="collapsible-btn" onClick={collapsibleHandler}>{semester}</button>
        <table className="collapsible-content">
            <tbody>
                {courseList.map((courseObject) => <ClickableTableRow key={courseObject.courseName} courseName={courseObject.courseName} courseGrade={courseObject.grade} />)}
            </tbody>
        </table>
    </div>
}

export default Collapsible