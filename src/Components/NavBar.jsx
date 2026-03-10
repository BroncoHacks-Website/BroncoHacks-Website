import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'
import navbar_logo from '../Assets/Icons/navbar_logo.svg'

const NavBar = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='navbar-container'>
        <a href="/">
          <img src={navbar_logo} alt="" className='logo' />
        </a>
        <nav className='navbar'>
          <ul>
            <li className='nav-btn'>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  <span>Home</span>
                </NavLink>
              </li>

              <li className='nav-btn'>
                <NavLink 
                  to="/team" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  <span>Team</span>
                </NavLink>
              </li>

              <li className='nav-btn'>
                <NavLink 
                  to="/sponsors" // update this to the route you want to link to
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  <span>Sponsors</span>
                </NavLink>
              </li>

              <li className='nav-btn'>
                <NavLink 
                  to="/hallOfFame" // update this to the route you want to link to
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  <span>Hall of Fame</span>
                </NavLink>
              </li>

              <li className='nav-btn'>
                <NavLink 
                  to="/faq" // update this to the route you want to link to
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  <span>FAQ</span>
                </NavLink>
              </li>

            </ul>
        </nav>
    </div>
  )
}

export default NavBar