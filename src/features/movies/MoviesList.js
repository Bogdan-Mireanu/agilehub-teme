import React, {useState, useEffect} from 'react';
import Movie from './Movie';

export default function MovieList(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
       async function getMovies(){
        const data = await fetch('https://movies-app-siit.herokuapp.com/movies').then(res => res.json());
        setMovies(data.results);
        console.log(data.results);
       };
       getMovies();
    }, []);

     /* async componentDidMount() {
         const movies = await fetch('').then(res => res.json());
         this.setState({
             movies
         });
     }*/
    if(!movies.length){
        return 'Loading ...';
    }

    return (
        <div>
            <h1 className="display-5 text-secondary">My List of Movies</h1>
            <div className="container-fluid d-flex flex-wrap justify-content-around">
                 {movies.map(item =>(movies.indexOf(item) >= 1) && <Movie movie={item} key={item._id}/>)}
            </div>
        </div>
    )
}
