import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import './Row.css';
import MovieModal from './MovieModal';
import { register } from 'swiper/element/bundle';

register();
export default function Row({ title, fetchUrl, id, isLargeRow }) {
    const [movies, setmovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({}); 
    
    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async() => {
        const request = await axios.get(fetchUrl);
        setmovies(request.data.results);
    }
    
    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }

    return <section className="row">
        <h2>{title}</h2>
        <swiper-container>
        {/* <div className="slider">
            <div 
                className="slider__arrow-left" 
                onClick={() => {
                    document.getElementById(id).scrollLeft -= window.innerWidth - 80; // 80은 Row section margin(40), row__posters div padding(40)을 제외하는 값
                }}>
                <span className="arrow">
                    {"<"}
                </span>
            </div> */}
            <div id={id} className="row__posters">
                {movies.map((movie) => (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>
            {/* <div 
                className="slider__arrow-right"
                onClick={() => {
                    document.getElementById(id).scrollLeft += window.innerWidth + 80;
                }}
            >
                <span className="arrow">
                    {">"}
                </span>
            </div>
        </div> */}
        </swiper-container>
        {modalOpen && 
            <MovieModal 
                {...movieSelected} // movieSelected={movieSelected}
                setModalOpen={setModalOpen}
            />
        }
    </section>
}
  