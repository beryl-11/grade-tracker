import "../../css/Collapsible.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ClickableTableRow from "./ClickableTableRow";

function Collapsible(props) {
    const [collapsibleState, setCollapsibleState] = useState("collapsed");

    //TODO: Find more elegant way of toggling states
    function toggleCollapsible() {
        if (collapsibleState === "collapsed") {
            setCollapsibleState("expanded");
        } else {
            setCollapsibleState("collapsed");
        }
    }

    const { semester, courseList } = props;

    return <div className="collapsible">
        <button type="button" className="collapsible-btn" onClick={toggleCollapsible}>{semester}</button>

        <table className={`collapsible-content ${collapsibleState}`}>
            <tbody>
                {courseList.map((courseObject) => {
                    const currId = Object.keys(courseObject)[0];

                    return <ClickableTableRow
                        key={currId}
                        courseId={currId}
                        courseName={courseObject[currId].courseName}
                        courseGrade={courseObject[currId].grade}
                    />
                })}
            </tbody>
        </table>
    </div>
}

export default Collapsible