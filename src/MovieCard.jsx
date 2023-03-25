import React from 'react';
import './MovieCard.css'


function MovieCard({ movie }) {
    return (
        <div className='container'>
            <div className='movie'>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via/placeholder.com/400'} alt={movie.Title} />
            <div className='card'>
                <div>
                    <h2>{movie.Title}</h2>
                    <p>Released: <b>{movie.Year}</b></p>
                    <p>{movie.Type}</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default MovieCard;