
import React from 'react';
import './cards.css';
import Rate from '../Rate'



function CreateCards({movies}) {
  return (
      <div className="Hbody">{
          movies.map((movie) => {    
            return (
                <div className="movieCard">
                  <img src={movie.ImgSrc} alt=""/>
                  <h2>{movie.MovieTitle}</h2>
                  <p>{movie.MovieDesc}</p>
                  <div className='Rating'>
                  <Rate rating={movie.Rating}/>
                  </div>
                </div>)
          })
        }
      </div>
    )
}

export default CreateCards
