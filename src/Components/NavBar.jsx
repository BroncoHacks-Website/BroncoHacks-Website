import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navBar.css'
import navbar_logo from '../Assets/Icons/navbar_logo.svg'

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <img src={navbar_logo} alt="" className='logo'/>
        <nav className='navbar'>
            <ul>
              <li className='nav-btn'><NavLink to="/">Home</NavLink></li>
              <li className='nav-btn'><NavLink to="/">Team</NavLink></li>
              <li className='nav-btn'><NavLink to="/">Sponsors</NavLink></li>
              <li className='nav-btn'><NavLink to="/">Hall of Fame</NavLink></li>
              <li className='nav-btn'><NavLink to="/">FAQ</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar