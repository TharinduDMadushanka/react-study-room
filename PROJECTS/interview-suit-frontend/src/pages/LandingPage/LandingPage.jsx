import React from 'react'
import './LandingPage.css'

import logo from '../../assets/landing-page/logo.png'
import hero_bg from '../../assets/landing-page/landing-bg.png'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

    const navigate = useNavigate();

  return (

    <div className='landig-page'>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 py-3">
            <div className="landing-logo">
                
                <a className="land-navbar-brand" href="#">
                <img src={logo} alt="Logo" className="logo" />
                </a>

            </div>

            <div className="land-nav-links-section">
                <ul className="navbar-nav land-nav-links">

                    <li className="nav-item">
                        <a className="nav-link" href="#about">ABOUT</a>
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

                </ul>
            </div>
            
            <div className="landing-nav-btn">

                <button 
                    className="btn contact-us mx-2">
                    CONTACT US
                </button>
                
                <button 
                    className="btn join-us"
                    onClick={() => {navigate('/signup')}}>
                    JOIN WITH US
                </button>
                
            </div>
        </nav>

        {/* Hero Section */}
        <div className="container text-center mt-5 hero-section">
            <div className="row align-items-center hero-section">

                <div className="col-md-6 text-start left-col">
                    <h1 className="hero-title">Are you ready to <br /> Ace your interview <br /> with us..</h1>
                    <div className="mt-4">
                    
                    <div className=" hero-btn">

                        <button 
                            className="btn btn-outline-primary me-3"
                            onClick={() => {navigate('/signup')}}>
                            Sign Up
                        </button>

                        <button 
                            className="btn btn-outline-primary"
                            onClick={() => {navigate('/login')}}>
                            Login
                        </button>

                    </div>

                    </div>
                </div>

                <div className="col-md-6 right-col">
                    <img
                    src={hero_bg}
                    alt="Interview"
                    className="img-fluid hero-image"
                    />
                </div>

            </div>
        </div>

        {/* Footer Section */}
        <div className="footer mt-5 py-4">
        <div className="container d-flex justify-content-around">
            <div className="footer-item d-flex align-items-center">
            <i className="bi bi-geo-alt fs-3 me-3"></i>
            <div>
                <p className="footer-title mb-0 fw-bold">Pay Us a Visit</p>
                <p className="mb-0 footer-title-sub">Colombo</p>
            </div>
            </div>
            <div className="footer-item d-flex align-items-center">
            <i className="bi bi-telephone fs-3 me-3"></i>
            <div>
                <p className="footer-title mb-0 fw-bold">Give Us a Call</p>
                <p className="mb-0 footer-title-sub">+94 77 123 4567</p>
            </div>
            </div>
            <div className="footer-item d-flex align-items-center">
            <i className="bi bi-envelope fs-3 me-3"></i>
            <div>
                <p className="footer-title mb-0 fw-bold">Send Us a Message</p>
                <p className="mb-0 footer-title-sub">interviewsuite@gmail.com</p>
            </div>
            </div>
        </div>
        </div>

    </div>

  )
}

export default LandingPage
