import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import Cards from './Cards';

const Form = () => {
    //  on met les data dans la constante moviesData et un useState de type array
    const [moviesData, setMoviesData] = useState([]);
    //  stocker la recherche de mon utilisateur
    const [search, setSearch] = useState("code");
    //  tri sur les films, onl'initatilise a null
    const [sortGoodBad, setSortGoogdBad] = useState("null");

    //  quand le composant est appelé, tu vas me faire la chose suivante
    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=c906cb5d4e8234c1ed739bdce117f432&query=${search}`
        )
            //  on va rechercher le tableau depuis l'element results
            .then((res) => setMoviesData(res.data.results));
        //  ensuite on se controle en allant dans la console > components > Form > Hooks > State
    }, [search]);

    return (
        <div className='form-component'>
            <div className='form-container'>
                {/* Partie formulaire */}
                <form>
                    <input
                        type="text"
                        placeholder="Entrez le titre d'un film"
                        id='search-input'
                        //la feature de la recherche
                        onChange={e => setSearch(e.target.value)}
                    />
                    {/* Bouton Rechercher */}
                    <input type="submit"
                        value="Rechercher" />
                </form>

                {/* Partie du tri */}
                <div className='btn-sort-container'>
                    <div className='btn-sort' id='goodToBad'
                        onClick={() => setSortGoogdBad("goodToBad")}>
                        Top <span>&#x2799; </span>
                    </div>

                    <div className='btn-sort' id='badToGood'
                        onClick={() => setSortGoogdBad("badToGood")}>
                        Flop <span>&#x2799; </span>
                    </div>
                </div>
            </div >
            {/* composant qui va stocker les resultats */}
            <div className='result'>
                {moviesData
                    //  afficher 12 cards
                    .slice(0, 12)
                    //  on trie du meilleur au moins bonavec la méthode sort.
                    .sort((a, b) => {
                        if (sortGoodBad === "goodToBad") {
                            return b.vote_average - a.vote_average;
                        } else if (sortGoodBad === "badToGood") {
                            return a.vote_average - b.vote_average;
                        }
                    })
                    .map((movie) => (
                        <Cards movie={movie} key={movie.id} />
                    ))}
            </div>
        </div >
    );
}

export default Form;