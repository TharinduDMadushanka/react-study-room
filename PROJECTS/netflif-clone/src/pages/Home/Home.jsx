import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_img from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import hero_img2 from '../../assets/bg-2.jpg'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_img2} alt=""  className='banner-img' />

        <div className="hero-cation">
          <img src={hero_title} alt="" className='caption-img'/>
          <p> Discovering his ties to a secret ancient order, a oung man living in modern Istanbul embarks on a quest to save 
            the city from an immortal enemy.
          </p>

          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>

          <TitleCards/>
        </div>
      </div>

      <div className="more-cards"> 
        {/* send title and categor(from tmdb api database) as props for titlecard component */}
        <TitleCards title={"Blockbuster Movie"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcomming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for you"} category={"now_playing"}/>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
