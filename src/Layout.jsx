import { Outlet } from "react-router-dom"
import GlobalHeaderBar from "./components/GlobalHeaderBar"
import QuickActionToolbar from "./components/QuickActions/QuickActionToolbar"
import './css/style.css' // do something about this
import Modal from "./modals/Modal"

function Layout() {
    return <>
      <GlobalHeaderBar />
      <main>
        <Outlet />
      </main>
      <QuickActionToolbar />
      
      <div id="overlays"></div>
    </>
}

export default Layout