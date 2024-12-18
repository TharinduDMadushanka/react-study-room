import React from 'react'
import './Navbar.css'

// import logo from '../../assets/landing-page/logo.png'
import logo from '../../assets/landing-page/logo-2.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light px-4 py-3">
            <div className="nav-logo">
                
                <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" className="logo" />
                </a>

            </div>

            <div className="nav-links-section">
                <ul className="navbar-nav nav-links">

                    <li className="nav-item">
                        <a className="nav-link" href="#about">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">SERVICES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#howto">HOW TO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#review">REVIEW</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#review">PREPARE</a>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
