import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="logo">dribbble</h1>
          <ul className="nav-links">
            <li><a href="#">Inspiration</a></li>
            <li><a href="#">Find Work</a></li>
            <li><a href="#">Learn Design</a></li>
            <li><a href="#">Go Pro</a></li>
            <li><a href="#">Hire Designers</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-bar" />
            <button className="search-icon">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <button className="bag-icon">
            <i className="fa fa-shopping-bag"></i>
          </button> 
  
          <Link to="/profilepage" className="profile-link">
            <div className="profile-img-container">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="profile-img"
              />
            </div>
          </Link>
          <button className="upload-btn">Upload</button>
          <button className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <i className={`fa fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-container">
          <ul className="menu-links">
            <li><a href="#">Inspiration</a></li>
            <li><a href="#">Find Work</a></li>
            <li><a href="#">Learn Design</a></li>
            <li><a href="#">Go Pro</a></li>
            <li><a href="#">Hire Designers</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
