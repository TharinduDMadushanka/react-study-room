import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import profile from '../../assets/userProfile.jpg'
import { API_KEY, value_convertor } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'


const PlayVideo = () => {

    const {videoId} = useParams();

    const [apiData, setApiData] =useState(null);
    const [chanelData, setChanelData] =useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () =>{
        // Fetching video data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]))
    }

    const fetchOtherData = async ()=>{
        //fetch chanels other data like img, subs
        const chanelData_url = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(chanelData_url).then(res=> res.json()).then(data=> setChanelData(data.items[0]))
    
        //fetchin comment data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res=> res.json()).then(data=>setCommentData(data.items));
    
    }

    useEffect(()=>{
        fetchVideoData();
    },[videoId])

    useEffect(()=>{
        fetchOtherData();
    },[apiData])

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}

        {/* this coppied from yt */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
            <p>{apiData?value_convertor(apiData.statistics.viewCount):"16K"} Views &bull;  {apiData?.snippet?.publishedAt ? moment(apiData.snippet.publishedAt).fromNow() : "Unknown date"}</p>
            <div>
                <span><img src={like} alt="" />{apiData?value_convertor(apiData.statistics.likeCount):"155"}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" />share</span>
                <span><img src={save} alt="" />save</span>
            </div>
        </div>
        <hr />

        <div className="publisher">
            <img src={chanelData?chanelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:""}</p>
                <span>{chanelData?value_convertor(chanelData.statistics.subscriberCount):""} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>

        <div className="vid-description">
            <p>{apiData?apiData.snippet.description:"No description"}</p>
            <hr />
            <h4>{apiData?value_convertor(apiData.statistics.commentCount):"102"} Comments</h4>
            
            {commentData.map((item,index)=>{
                return(
                    <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <div>
                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>{value_convertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
                );
            })}
        </div>
    </div>
  )
}

export default PlayVideo
