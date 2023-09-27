import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Layout
