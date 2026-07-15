import { Outlet } from "react-router-dom"
import GlobalHeaderBar from "./components/GlobalHeaderBar"
import QuickActionToolbar from "./components/QuickActions/QuickActionToolbar"
import './css/style.css' // do something about this

function Layout() {
    return <>
      <GlobalHeaderBar />
      <main>
        <Outlet />
      </main>
      <QuickActionToolbar />
    </>
}

export default Layout