import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import useGetCurrentUser from './hooks/useGetCurrentUser.jsx'
import { useSelector } from 'react-redux'
import Dashboard from './pages/Dashboard.jsx'
import Generate from './pages/Generate.jsx'
import Editor from './pages/Editor.jsx'
export const serverUrl = "http://localhost:5000"


function App () {
useGetCurrentUser()
const {userData}= useSelector(state=>state.user) 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={userData?<Dashboard/>:<Home/>} />
        <Route path='/generate' element={userData?<Generate/>:<Navigate to={"/"}/>} />
         <Route path='/editor/:id ' element={userData?<Editor/>:<Navigate to={"/"}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
