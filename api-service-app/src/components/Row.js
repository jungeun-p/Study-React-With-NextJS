import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import './Row.css';
import MovieModal from './MovieModal';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            loop={true} // loop 기능
            breakpoints={{ // view point에 따라 보이는 슬라이드와, 넘어가는 슬라이드 개수
                1378: {
                    slidesPerView: 6,
                    slidesPerGroup: 6,
                },
                998: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                625: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                0: {
                    slidesPerView: 0,
                    slidesPerGroup: 0,
                },
            }}
            navigation // arrow button 사용
            pagination={{ clickable: true }} // 페이지 버튼 유무
        >
            <div id={id} className="row__posters">
                {movies.map((movie) => (
                    <SwiperSlide>
                        <img 
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name} 
                            onClick={() => handleClick(movie)}
                        />
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
        {modalOpen && 
            <MovieModal 
                {...movieSelected} // movieSelected={movieSelected}
                setModalOpen={setModalOpen}
            />
        }
    </section>
}
  