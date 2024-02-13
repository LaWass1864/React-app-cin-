import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import Cards from './Cards';

const Form = () => {
//  on met les data dans la constante moviesData et un useState de type array
    const [moviesData, setMoviesData] = useState([])
    //  quand le composant est appelé, tu vas me faire la chose suivante
    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=c906cb5d4e8234c1ed739bdce117f432&query=war`
            )
            //  on va rechercher le tableau depuis l'element results
        .then((res) => setMoviesData(res.data.results));
//  ensuite on se controle en allant dans la console > components > Form > Hooks > State 
          }, []);

    return (
        <div className='form-component'>
            <div className='form-container'>
                {/* Partie formulaire */}
                <form>
                    <input
                        type="text"
                        placeholder="Entrez le titre d'un film"
                        id='search-input' />
                    {/* Bouton Rechercher */}
                    <input type="submit"
                        value="Rechercher" />
                </form>

                {/* Partie du tri */}
                <div className='btn-sort-container'>
                    <div className='btn-sort' id='goodToBad'>
                        Top <span>&#x2799; </span>
                    </div>

                    <div className='btn-sort' id='badToGood'>
                        Flop <span>&#x2799; </span>
                    </div>
                </div>
            </div >
            {/* composant qui va stocker les resultats */}
            <div className='result'>

                {moviesData.slice(0,12).map((movie) => (
                    <Cards movie={movie} key={movie.id} />
                ))}
            
            </div>
        </div >
    );
    }

export default Form;