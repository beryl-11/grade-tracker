import "../../css/Collapsible.css";
import { Link } from "react-router-dom";
import ClickableTableRow from "./ClickableTableRow";

function Collapsible(props) {
    const { semester, courseList } = props;

    return <div className="collapsible">
        <button type="button" className="collapsible-btn">{semester}</button>
        <table className="collapsible-content">
            <tbody>
                {courseList.map((courseObject) => <ClickableTableRow key={courseObject.courseName} courseName={courseObject.courseName} courseGrade={courseObject.grade} />)}
            </tbody>
        </table>
    </div>
}

export default Collapsible