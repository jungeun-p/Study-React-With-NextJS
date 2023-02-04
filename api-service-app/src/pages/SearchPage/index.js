import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import { useDebounce } from '../../hooks/useDebounce';
import "./SearchPage.css";

export default function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const debouncedSearchTerm = useDebounce(query.get("q"), 500); // query q의 값

    useEffect(()=>{
        if(debouncedSearchTerm) fetchSearchMovie(debouncedSearchTerm);
    }, [debouncedSearchTerm])
    
    const fetchSearchMovie = async(debouncedSearchTerm) => {
        try {
            const request = await axios.get(`/search/multi?include_adult=false&query=${debouncedSearchTerm}`);
            setSearchResults(request.data.results);
        } catch (error) {
            console.log(`error, ${error}`);
        }
    }
    
    // rendering function
    const renderSearchResults = () => {
        return searchResults.length > 0 ? (
            <section className="search-container">
                {searchResults.map((movie) => {
                    if(movie.backdrop_path !== null && movie.media_type !== "person") {
                        const movieImageUrl = 
                        "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
                        return (
                            <div className="movie" key={movie.id}>
                                <div className="movie__column-poster">
                                    <img 
                                    src={movieImageUrl} 
                                    alt="movie" 
                                    className="movie__poster" />
                                </div>
                            </div>
                        )
                    }
                })}
            </section>
        ):(<section className="no-results">
            <div className="no-results__text">
                <p>
                    No movie match {debouncedSearchTerm} you want search.
                </p>
            </div>
        </section>)
    }

    return renderSearchResults();
}
