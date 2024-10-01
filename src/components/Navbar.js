import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; 

const Navbar = ({ theme, toggleTheme }) => {
  const handleNavItemClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  };

  const handleTogglerClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.toggle("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Hamza Khan MHK</Link>
        <button className="navbar-toggler" type="button" onClick={handleTogglerClick} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavItemClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={handleNavItemClick}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavItemClick}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs" onClick={handleNavItemClick}>Blog</Link>
            </li>
            <li className="nav-item">
              <div className="btn btn-outline-primary nav-link" download href={`${process.env.PUBLIC_URL}/Resume.pdf`}>Download CV</div>
            </li>
            <li className="nav-item d-flex align-items-center" onClick={toggleTheme} style={{ cursor: 'pointer', color: 'white' }}>
              <FontAwesomeIcon icon={theme === 'light-theme' ? faSun : faMoon} size="lg" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
