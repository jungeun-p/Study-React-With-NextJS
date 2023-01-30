import axios from '../api/axios';
import React, { useState, useEffect } from 'react'
import instance from '../api/axios';
import requests from '../api/requests';
import './Banner.css';
import styled from 'styled-components';

export default function Banner() {
    const [movie, setMovie] = useState([]);
    const [isClicked, setisClicked] = useState(false);
    
    useEffect(() => {
        fetchData();
    }, []);

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
        <>
        {!isClicked ? (
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
                        <button 
                            className="banner__button play" 
                            onClick={() => setisClicked(!isClicked)}
                        >
                            Play
                        </button>
                        <button className="banner__button info">More Information</button>

                    </div>
                    <h1 className="banner__description">{truncate(movie.overview, 100)}</h1>
                </div>
                <div className="banner--fadeBottom" />
            </header>
        ):(
            <Container>
                <HomeContainer>
                    <Iframe 
                        width="560" 
                        height="315" 
                        src={`https://www.youtube.com/embed/${movie.videos?.results[0]?.key}?controls=0&autoplay=1&loop=1&mute=1&palylist=${movie.videos?.results[0]?.key}`} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                    ></Iframe>
                </HomeContainer>
            </Container>)}
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.65;
    border: none;

    &::after {
        content: "";
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%auto;
    }
`;