import { Outlet } from "react-router-dom"
import GlobalHeaderBar from "./components/GlobalHeaderBar"
import QuickActionToolbar from "./components/QuickActions/QuickActionToolbar"
import './css/style.css' // do something about this
import ModalLayout from "./modals/Modal"
import { ModalContainer } from "./modals/ModalContainer"
import { createContext, useContext, useState } from "react"
import { ModalContextProvider } from "./components/ModalManager"


function Layout() {

  return <>
    <ModalContextProvider>
      <div id="body">
        <GlobalHeaderBar />
        <main>
          <Outlet />
        </main>
        <QuickActionToolbar />
      </div>

      <div id="overlays">
        <ModalContainer />
      </div>
    </ModalContextProvider>
  </>
}

export default Layout