import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY, value_convertor } from '../../data'
import { Link } from 'react-router-dom'

const Recommended = ({ categoryId = '0' }) => {

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideo_url)
            .then(res => res.json())
            .then(data => {
                setApiData(data.items);
                console.log(data.items); // Log the API response to verify it
            });
    }

    useEffect(() => {
        fetchData();
    }, [categoryId]);  // Include categoryId in the dependency array if it changes

    return (
        <div className='recommended'>
            {apiData.map((item, index) => {
                return (
                    <Link 
                        key={index} 
                        to={`/video/${item.snippet.categoryId}/${item.id}`} 
                        className="side-video-list"
                    >
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_convertor(item.statistics.viewCount)} views</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    )
}

export default Recommended
