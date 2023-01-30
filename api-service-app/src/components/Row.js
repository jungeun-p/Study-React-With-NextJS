import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import './Row.css';

export default function Row({ title, fetchUrl, id, isLargeRow }) {
    const [movies, setmovies] = useState([]);
    
    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async() => {
        const request = await axios.get(fetchUrl);
        setmovies(request.data.results);
    }
    return <section className="row">
        <h2>{title}</h2>
        <div className="slider">
            <div 
                className="slider__arrow-left" 
                onClick={() => {
                    document.getElementById(id).scrollLeft -= window.innerWidth - 80; // 80은 Row section margin(40), row__posters div padding(40)을 제외하는 값
                }}>
                <span className="arrow">
                    {"<"}
                </span>
            </div>
            <div id={id} className="row__posters">
                {movies.map((movie) => (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            <div 
                className="slider__arrow-right"
                onClick={() => {
                    document.getElementById(id).scrollLeft += window.innerWidth + 80;
                }}
            >
                <span className="arrow">
                    {">"}
                </span>
            </div>
        </div>
    </section>
}
  