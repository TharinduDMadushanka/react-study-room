import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

import home_bg from '../../assets/home/home-bg-3.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div className="home-bg">
        <img src={home_bg} alt="Background" />
      </div>
    </div>
  );
};

export default Home;
