import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import card_data from '../../assets/cards/Cards_data';

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  // scroll without press shift btn
  const cardsRef = useRef();

  // api method for now play movies from TMDB api databases

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjZlNDJjY2FmMjY3MDRkMTRmNGIxNzRlYzczYzZjYyIsIm5iZiI6MTcyNzQxMDI2Ny4xNTI2OTIsInN1YiI6IjY2ZjYyZjM5NmNlZGJlZDAxNTcwYTNjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KfgvWUhqRzgWi-Ac_SiRhf1sK8pwv9ktoZjCg2W5COM'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY; 
  };

  useEffect(() => {
    // fetch data from api method
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options) // change the movie list based on category in tmdb use categoru props
    .then(response => response.json())
    .then(response => setApiData(response.results)) // set fetched data foe setter function
    .catch(err => console.error(err)
    );

    cardsRef.current.addEventListener('wheel', handleWheel); // Corrected typo here
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" /> {/* complete movie img url from tmdb movie url patter */}
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
