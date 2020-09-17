import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function MovieDetails() {
    const {id} = useParams();
    const [movie, setMovieDetails] =useState([]);

    useEffect(() => {
       async function GetMovieDetails(){
           const data = await fetch('https://movies-app-siit.herokuapp.com/movies/'+id).then(res => res.json());
           setMovieDetails(data);
           console.log(data);
       }
       GetMovieDetails();
    }, [id])
    
    
    return (
        <div className="container">
            <div className="card flex-row flex-wrap bg-warning">
                <div className="card-header border-1">
                    <img src={movie.Poster} alt={movie.Title}/>
                </div>
                <div className="card-block px-4 mt-4 text-center">
                    <h3 className="card-title">{movie.Title}</h3>
                    <p className="card-text">Year of release: {movie.Released}</p>
                    <p className="card-text">Actors: {movie.Actors}</p>
                    <p className="card-text">Awards: {movie.Awards}</p>
                    <p className="card-text">Genre: {movie.Genre}</p>
                    <p className="card-text">IMDB Rating:{movie.imdbRating}</p>
               </div>
            </div>
        </div>
    )
}
