import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div className='about'>

      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
        <div className="about-para">
            <p>
             a dedicated software developer with a strong focus on web development. 
             I enjoy working with modern technologies like React for frontend development
             and Spring Boot for backend services.
            </p>
            <p>
            I strive to build applications that are efficient, scalable, and visually appealing.
             Whether it's coding, learning new skills, or collaborating on exciting projects
            </p>
        </div>

        <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Java</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
        </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />

        <div className="about-achivement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />

        <div className="about-achivement">
            <h1>50+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
