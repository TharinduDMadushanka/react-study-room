import React, { useEffect, useState } from 'react'
import './Player.css'
import back_aarow from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'

// get youtube trailer video and its details by video id using tmdb api [get movie id & movies -> video and paste that id and you will get the details for respective video]
const Player = () => {

  const {id} = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjZlNDJjY2FmMjY3MDRkMTRmNGIxNzRlYzczYzZjYyIsIm5iZiI6MTcyNzQxMDI2Ny4xNTI2OTIsInN1YiI6IjY2ZjYyZjM5NmNlZGJlZDAxNTcwYTNjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KfgvWUhqRzgWi-Ac_SiRhf1sK8pwv9ktoZjCg2W5COM'
    }
  };

  useEffect(()=>{
    // pass the respective movie id to display trailer
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0])) // store the details of fetched data results first object
    .catch(err => console.error(err));

  },[])
  
  
  return (

    <div className='player'>
      <img src={back_aarow} alt="" />
      <iframe width='90%' height='90%' 
        src= {`https://www.youtube.com/embed/${apiData.key}`}  // set respective video traile by passing fetch datas key 
        title='trailer' frameBorder='0' allowFullScreen> {/* url fr movie trailer(yt pattern) */}
      </iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player
