import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const Movies = ({ searchTerm }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=c906cb5d4e8234c1ed739bdce117f432&query=${searchTerm}`)
            .then((res) => {
                setData(res.data.results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [searchTerm]);

    return (
        <div className="result">
            {data && data.map((results) => (
                <Cards key={results.id} results={results} />
            ))}
        </div>
    );
};

export default Movies;
