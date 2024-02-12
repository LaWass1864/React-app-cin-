import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Movies = () => {
    // déclaration des variables
    const [data, setData] = useState([])
    const [inputSearch, setInputSearch] = useState("");

useEffect(() => {
    axios
    .get("https://api.themoviedb.org/3/search/movie?api_key=c906cb5d4e8234c1ed739bdce117f432&query=code&language=fr-FR")
      // On va chercher les datas > movies
      .then((res) =>  {
        setData(res.data.results);
   
      })

  }, []);

    return (
       <div className="result">
       
            {data && data
            .map((results) => (
                <Cards key={results.id} results={results} />
            ))
            }
       
       </div>
    );
    }

export default Movies;