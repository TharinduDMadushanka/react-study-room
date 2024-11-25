import React from 'react';
import './Header.css'; // Additional CSS for styling
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div
      className="min-vh-100 mb-4 bg-cover bg-center d-flex align-items-center w-100 overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
    </div>
  );
};

export default Header;
