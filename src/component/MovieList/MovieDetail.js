import React from 'react';
import Rate from '../Rate';
import { Link } from 'react-router-dom';


const MovieDetail = ({location}) => {
    const movieDet = location.state;
    return (
        <div className="detailsContainer">
                  <img className="detailsImage" src={movieDet.ImgSrc} alt=""/>
                  <h2>{movieDet.MovieTitle}</h2>
                  <p>{movieDet.MovieDesc}</p>
                  <div className='Rating'>
                  <Rate rating={movieDet.Rating}/>
                  </div>
        </div>
    )
}

export default MovieDetail
