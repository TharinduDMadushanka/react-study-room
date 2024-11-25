import React from 'react';
import './Navbar.css'; // Custom CSS for additional styles
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className="position-absolute top-0 start-0 w-100 z-10">
      <div className="container d-flex justify-content-between align-items-center py-4 px-md-5 px-lg-5 bg-transparent">
        <img src={assets.logo} alt="Logo" />

            <div className="nav-links">
                <ul className="d-none d-md-flex gap-4 text-white mb-0">          
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
      </div>
    </div>
  );
};

export default Navbar;
