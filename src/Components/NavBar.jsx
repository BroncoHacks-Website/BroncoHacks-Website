import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

import navbar_logo from '../Assets/Icons/navbar_logo.svg'

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openHamburger = () => {
    setIsOpen(!isOpen);
    const navMobile = document.querySelector('.navbar-mobile');
    navMobile.classList.toggle('active');

    const bars = document.querySelector('.bar-menu');
    bars.classList.toggle('active');
  }

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
                  to="/FAQ" // update this to the route you want to link to
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  <span>FAQ</span>
                </NavLink>
              </li>

            </ul>
        </nav>

        {/* MOBILE NAVBAR */}
        <nav className='navbar-mobile-container'>
          <div className='bar-menu' onClick={openHamburger}>
            <span className='bar bar-top'></span>
            <span className='bar bar-middle'></span>
            <span className='bar bar-bottom'></span>
          </div>
          <ul className='navbar-mobile'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={scrollToTop}><span className="fa-solid fa-house"></span></NavLink></li>
            <li><NavLink to="/team" className={({ isActive }) => isActive ? 'active' : ''} onClick={scrollToTop}><span className="fa-solid fa-people-group"></span></NavLink></li>
            <li><NavLink to="/sponsors" className={({ isActive }) => isActive ? 'active' : ''} onClick={scrollToTop}><span className="fa-solid fa-handshake"></span></NavLink></li>
            <li><NavLink to="/hallOfFame" className={({ isActive }) => isActive ? 'active' : ''} onClick={scrollToTop}><span className="fa-solid fa-trophy"></span></NavLink></li>
            <li><NavLink to="/FAQ" className={({ isActive }) => isActive ? 'active' : ''} onClick={scrollToTop}><span className="fa-solid fa-circle-question"></span></NavLink></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar