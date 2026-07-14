import "../../css/Collapsible.css"
import { Link } from "react-router-dom"
import ClickableTableRow from "./ClickableTableRow";

function Collapsible() {
    function rowClickHandler() {
        window.location.href = "/details";
    }

    return <div className="collapsible">
        <button type="button" className="collapsible-btn">Collapsible Button</button>
        <table className="collapsible-content">
            <ClickableTableRow />
            <ClickableTableRow />
            <ClickableTableRow />
        </table>
    </div>
}

export default Collapsible