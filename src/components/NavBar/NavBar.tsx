import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import './navbar.css'
const NavBar = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className='navBar'>
        <span className='nav__group'>
            <Link to={'/'} className='nav__item addSpace'>Home</Link>
            <Link to={'/about'} className='nav__item addSpace'>About</Link>
            <Link to={'https://drive.google.com/file/d/1GvAgsvwpXqWD5Dq7ySMiunmIUDAyuvqA/view'} target='_blank' className='nav__item addSpace'>Resume</Link>
            <span className='contact_btn' onClick={() => navigate('/contact')}>
              <Link to={'/contact'} className='nav__item undoFocusCss'>Contact</Link>
            </span>
        </span>
      </nav>
      <Outlet/>
    </>
  )
}

export default NavBar
