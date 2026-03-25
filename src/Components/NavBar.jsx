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
        <a href="/" id='navbar-logo-container'>
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
                  to="/FAQ" // update this to the route you want to link to
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  <span>FAQ</span>
                </NavLink>
              </li>

            </ul>
        </nav>
        <a id="mlh-trust-badge"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-blue.svg"
              alt="Major League Hacking 2026 Hackathon Season"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
        </a>
    </div>
  )
}

export default NavBar