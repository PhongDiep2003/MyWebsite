import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import './navbar.css'
const NavBar = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className='navBar'>
        <span className='nav__group'>
            <Link to={'/'} className='nav__item'>Home</Link>
            <Link to={'/about'} className='nav__item'>About</Link>
            <span className='contact_btn' onClick={() => navigate('/contact')}>
              <Link to={'/contact'} className='nav__item'>Contact</Link>
            </span>
        </span>
      </nav>
      <Outlet/>
    </>
  )
}

export default NavBar
