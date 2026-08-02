import { Outlet } from "react-router-dom"
import GlobalHeaderBar from "./components/GlobalHeaderBar"
import QuickActionToolbar from "./components/QuickActions/QuickActionToolbar"
import './css/style.css' // do something about this
import ModalLayout from "./modals/Modal"
import ModalContainer from "./modals/ModalContainer"
import { createContext, useContext, useState } from "react"


function Layout() {

  return <>
    <div id="body">
      <GlobalHeaderBar />
      <main>
        <Outlet />
      </main>
      <QuickActionToolbar /></div>
    <div id="overlays">
        <ModalContainer />
    </div>
  </>
}

export default Layout