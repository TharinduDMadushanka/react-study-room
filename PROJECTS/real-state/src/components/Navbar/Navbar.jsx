import React, { useState } from 'react';
import './Navbar.css'; // Custom CSS for additional styles
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="position-absolute top-0 start-0 w-100 z-10">
      <div className="container d-flex justify-content-between align-items-center py-4 px-md-5 px-lg-5 bg-transparent">
        <img src={assets.logo} alt="Logo" />

        {/* Desktop Navigation */}
        <div className="nav-links d-none d-md-flex">
          <ul className="d-flex gap-4 text-white mb-0">
            <a href="#Header" className="text-decoration-none text-white custom-hover">
              Home
            </a>
            <a href="#Header" className="text-decoration-none text-white custom-hover">
              About
            </a>
            <a href="#Header" className="text-decoration-none text-white custom-hover">
              Projects
            </a>
            <a href="#Header" className="text-decoration-none text-white custom-hover">
              Testimonial
            </a>
          </ul>
        </div>

        <button className="d-none d-md-block btn btn-light px-4 py-2 rounded-pill">Sign up</button>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          alt="Menu Icon"
          className={`d-md-none menu-icon ${isNavOpen && 'd-none'}`}
          onClick={toggleNav}
        />
      </div>

      {/* Mobile Navigation Bar */}
      {isNavOpen && (
        <div className="mobile-nav position-fixed top-0 start-0 d-flex flex-column align-items-center justify-content-center">
          {/* Cross Icon */}
          <div className="position-absolute top-3 end-3">
            <img
              className="cross-icon"
              src={assets.cross_icon}
              alt="Close Icon"
              onClick={toggleNav}
            />
          </div>

          <ul className="text-center">
            <li>
              <a href="#Header" className="text-decoration-none text-white custom-hover" onClick={toggleNav}>
                Home
              </a>
            </li>
            <li>
              <a href="#Header" className="text-decoration-none text-white custom-hover" onClick={toggleNav}>
                About
              </a>
            </li>
            <li>
              <a href="#Header" className="text-decoration-none text-white custom-hover" onClick={toggleNav}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Header" className="text-decoration-none text-white custom-hover" onClick={toggleNav}>
                Testimonial
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
