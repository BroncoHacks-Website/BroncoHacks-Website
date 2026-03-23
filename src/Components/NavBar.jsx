import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import navbar_logo from "../Assets/Icons/navbar_logo.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <a href="/" onClick={closeMenu} className="logo-link">
        <img src={navbar_logo} alt="BroncoHacks logo" className="logo" />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="nav-btn">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={scrollToTop}
            >
              <span>Home</span>
            </NavLink>
          </li>

          <li className="nav-btn">
            <NavLink
              to="/team"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={scrollToTop}
            >
              <span>Team</span>
            </NavLink>
          </li>

          <li className="nav-btn">
            <NavLink
              to="/sponsors"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={scrollToTop}
            >
              <span>Sponsors</span>
            </NavLink>
          </li>

          <li className="nav-btn">
            <NavLink
              to="/hallOfFame"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={scrollToTop}
            >
              <span>Hall of Fame</span>
            </NavLink>
          </li>

          <li className="nav-btn">
            <NavLink
              to="/FAQ"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={scrollToTop}
            >
              <span>FAQ</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;