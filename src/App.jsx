import { useState } from 'react'
import './App.css'
import GlobalHeaderBar from './components/GlobalHeaderBar'
import Home from './pages/Home'
import GradeDetails from './pages/GradeDetails'

function App() {
  return (
    <>
    <GlobalHeaderBar/>
    <Home/>
    <GradeDetails/>
    </>
  )
}

export default App
