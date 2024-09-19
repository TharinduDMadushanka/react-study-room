import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import profile from '../../assets/userProfile.jpg'


const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best Youtube chanel to learn webdevelopment</h3>
        <div className="play-video-info">
            <p>1525 Vies &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />share</span>
                <span><img src={save} alt="" />save</span>
            </div>
        </div>
        <hr />

        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>TDM YT</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>

        <div className="vid-description">
            <p>Chanel that makes learning easy</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={profile} alt="" />
                <div>
                    <h3>Jack Sparrow <span>1 day ago</span></h3>
                    <p>wooow what a video!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={profile} alt="" />
                <div>
                    <h3>Jack Sparrow <span>1 day ago</span></h3>
                    <p>wooow what a video!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={profile} alt="" />
                <div>
                    <h3>Jack Sparrow <span>1 day ago</span></h3>
                    <p>wooow what a video!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={profile} alt="" />
                <div>
                    <h3>Jack Sparrow <span>1 day ago</span></h3>
                    <p>wooow what a video!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo
