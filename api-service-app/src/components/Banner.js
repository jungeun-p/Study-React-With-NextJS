import axios from '../api/axios';
import React, { useState, useEffect } from 'react'
import instance from '../api/axios';
import requests from '../api/requests';
import './Banner.css';

export default function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async() => {
        // 상영 중인 영화 정보 
        const request = await instance.get(requests.fetchNowPlaying); // await: 요청 처리 완료 대기 후 데이터를 request에 담기
        // 여러 영화 중 하나의 id값 추출 
        const movieId = request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ].id;
        // 특정 영화 정보 추출
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: "videos" },
        });
        setMovie(movieDetail);
    };

    const truncate = (str, n) => {
        return str?.length > n ? `${str.substr(0, n-1)}...` : str;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundImage: movie.backdrop_path === undefined ? (`none`):(`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`),
                backgroundPosition: "top center",
                backgroundSize: "cover"
            }}
        >
            <div className="banner__contents">
                <h1>
                    {movie.title || movie.name || movie.original_name }
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button play">Play</button>
                    <button className="banner__button info">More Information</button>

                </div>
                <h1 className="banner__description">{truncate(movie.overview, 100)}</h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}
