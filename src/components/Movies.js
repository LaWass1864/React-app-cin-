import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Movies = () => {
    // déclaration des variables
    const [data, setData] = useState([])
    const [inputSearch, setInputSearch] = useState("");

useEffect(() => {
    axios
    .get("https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=all")
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