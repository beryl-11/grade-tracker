import { Link } from "react-router-dom"
import ModalLayout from "../modals/Modal"
import ModalOpenButton from "../modals/ModalOpenButton"

export default function GlobalHeaderBar() {
  return <>
    <header className="global-header flex-container">
      <div className="logo-wrapper">
        <Link to="/">[Grade Tracker]</Link>
      </div>

      <div className="header-btn-wrapper flex-container">
        <ModalOpenButton className="global-header-btn" />  {/* TODO: Fix style of global header buttons*/}
      </div>
    </header>
    </>
}