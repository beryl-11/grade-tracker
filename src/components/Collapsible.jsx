import "../css/Collapsible.css"
import { Link } from "react-router-dom"

function Collapsible() {
    return <div className="collapsible">
        <button type="button" className="collapsible-btn">Collapsible Button</button>
        <table className="collapsible-content">
            <Link to="/details"><tr>
                <td className="course-name">course 1</td>
                <td className="course-grade">A+</td>
            </tr></Link>
            <tr data-href="/details">
                <td className="course-name">course 2</td>
                <td className="course-grade">A</td>
            </tr>
            <tr data-href="/details">
                <td className="course-name">Course 3</td>
                <td className="course-grade">C-</td>
            </tr>
        </table>
    </div>
}

export default Collapsible