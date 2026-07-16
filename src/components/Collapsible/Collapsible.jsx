import "../../css/Collapsible.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ClickableTableRow from "./ClickableTableRow";

function Collapsible(props) {
    const [collapsedState, setCollapsedState] = useState("expanded");

    //TODO: Find more elegant way of toggling states
    function toggleCollapsible() {
        setCollapsedState(prevState => (prevState === "collapsed" ? "expanded" : "collapsed"));
    }

    const { semester, courseList } = props;

    return <div className="collapsible">
        <button type="button" className="collapsible-btn" onClick={toggleCollapsible}>{semester}</button>

        <div className={`collapsible-content ${collapsedState}`}>
            <table>
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
    </div>
}

export default Collapsible