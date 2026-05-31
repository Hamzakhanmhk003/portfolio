import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; 

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
    setIsOpen(false);
  };

  const handleTogglerClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.toggle("show");
    }
    setIsOpen(!isOpen);
  };

  const handleBrandMouseEnter = () => {
    document.body.classList.add('brand-hovered');
  };

  const handleBrandMouseLeave = () => {
    document.body.classList.remove('brand-hovered');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link 
          className="navbar-brand" 
          to="/" 
          onMouseEnter={handleBrandMouseEnter} 
          onMouseLeave={handleBrandMouseLeave}
        >
          Hamza Khan MHK
        </Link>
        <button 
          className={`navbar-toggler ${isOpen ? 'open' : ''}`} 
          type="button" 
          onClick={handleTogglerClick} 
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handleNavItemClick} end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" onClick={handleNavItemClick}>Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={handleNavItemClick}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs" onClick={handleNavItemClick}>Blog</NavLink>
            </li>
            <li className="nav-item">
              <a className="btn download-cv-btn nav-link" href={`${process.env.PUBLIC_URL}/Resume.pdf`} download="Hamza_Khan_Resume.pdf">Download CV</a>
            </li>
            <li className="nav-item theme-toggle-btn" onClick={toggleTheme}>
              <FontAwesomeIcon icon={theme === 'light-theme' ? faSun : faMoon} size="lg" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
