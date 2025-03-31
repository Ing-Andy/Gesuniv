import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Prebloc from '../Components/BlocLog/PreblocForm'
import BlocForm from '../Components/BlocLog/BlocForm'
import Login from '../Pages/connections/login/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Prebloc />} /> */}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
