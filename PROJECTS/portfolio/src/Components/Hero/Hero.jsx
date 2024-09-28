import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Alex Bennet,</span> frontend developer based in USA.</h1>
      <p>
       A passionate developer specializing in building modern web applications.
       With experience in technologies like React, Spring Boot, and Java. 
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
