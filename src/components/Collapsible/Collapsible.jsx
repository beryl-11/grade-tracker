import "../../css/Collapsible.css"
import { Link } from "react-router-dom"
import ClickableTableRow from "./ClickableTableRow";

function Collapsible() {
    return <div className="collapsible">
        <button type="button" className="collapsible-btn">Collapsible Button</button>
        <table className="collapsible-content">
            <ClickableTableRow courseName="Course 1" courseGrade="A+"/>
            <ClickableTableRow courseName="Course 2" courseGrade="A"/>
            <ClickableTableRow courseName="Course 3" courseGrade="A-"/>
        </table>
    </div>
}

export default Collapsible