import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import Cards from './Cards';

const Form = () => {
    //  on met les data dans la constante moviesData et un useState de type array
    const [moviesData, setMoviesData] = useState([])
    //  quand le composant est appelé, tu vas me faire la chose suivante
    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=c906cb5d4e8234c1ed739bdce117f432&query=foot`
        )
            //  on va rechercher le tableau depuis l'element results
            .then((res) => setMoviesData(res.data.results));
        //  ensuite on se controle en allant dans la console > components > Form > Hooks > State
    }, []);

    constgenreFinder = () => {
        let genreArray = [];
        for (let index = 0; index < movie.genre_ids.length; index++) {
            switch (movie.genre_ids[index]) {
                case 28:
                    genreArray.push(`Action`);
                    break;
                case 12:
                    genreArray.push(`Aventure`);
                    break;
                case 16:
                    genreArray.push(`Animation`);
                    break;
                case 35:
                    genreArray.push(`Comédie`);
                    break;
                case 80:
                    genreArray.push(`Policier`);
                    break;
                case 99:
                    genreArray.push(`Documentaire`);
                    break;
                case 18:
                    genreArray.push(`Drame`);
                    break;
                case 10751:
                    genreArray.push(`Famille`);
                    break;
                case 14:
                    genreArray.push(`Fantasy`);
                    break;
                case 36:
                    genreArray.push(`Histoire`);
                    break;
                case 27:
                    genreArray.push(`Horreur`);
                    break;
                case 10402:
                    genreArray.push(`Musique`);
                    break;
                case 9648:
                    genreArray.push(`Mystère`);
                    break;
                case 10749:
                    genreArray.push(`Romance`);
                    break;
                case 878:
                    genreArray.push(`Science-fiction`);
                    break;
                case 10770:
                    genreArray.push(`Téléfilm`);
                    break;
                case 53:
                    genreArray.push(`Thriller`);
                    break;
                case 10752:
                    genreArray.push(`Guerre`);
                    break;
                case 37:
                    genreArray.push(`Western`);
                    break;
                default:
                    break;
            }
        }
    }
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
                {moviesData.slice(0, 12).map((movie) => (
                    <Cards movie={movie} key={movie.id} />
                ))}
            </div>
        </div >
    );
}

export default Form;