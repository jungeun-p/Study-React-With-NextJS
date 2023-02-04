import React from 'react'
import { useLocation } from 'react-router-dom';

export default function SearchPage() {
    
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const searchTerm = query.get("q"); // query q의 값

    return (
        <div>
            Search
        </div>
    )
}
