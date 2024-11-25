import React from 'react';
import './Header.css'; // Additional CSS for custom styles
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div
      className="min-vh-100 mb-4 bg-cover bg-center d-flex align-items-center w-100 overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />

      <div className="container text-center text-white py-4 px-3 px-md-5">
        <h2 className="display-4 fw-semibold pt-5 hero-title">
          Explore homes that fit your dreams
        </h2>
        <div className="mt-4">
          <a href="#Projects" className="btn btn-outline-light me-3 px-4 py-2 rounded">
            Projects
          </a>
          <a href="#Contact" className="btn btn-primary px-4 py-2 rounded">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
