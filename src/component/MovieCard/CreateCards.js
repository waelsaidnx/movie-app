
import React from 'react';
import './cards.css';
import Rate from '../Rate';
import { Link } from 'react-router-dom';



function CreateCards({movies}) {
  return (
      <div className="Hbody">{
          movies.map((movie) => {    
            return (
                <div className="movieCard">
                  <img src={movie.ImgSrc} alt=""/>
                  <Link className="links" to={
                    {
                      pathname: `/${movie.id}`,
                      state: movie,
                    }
                  }>
                  <h2>{movie.MovieTitle}</h2>
                  </Link>
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
