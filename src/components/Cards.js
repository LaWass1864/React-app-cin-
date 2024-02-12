import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Cards = ({ results, genreIds = [] }) => {
    // formatter une date
    let date = moment("2022-12-22")

    // formattage des genres de film
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios
            // on va récuperer la liste de tous les genres
            .get("https://api.themoviedb.org/3/genre/movie/list?api_key=c906cb5d4e8234c1ed739bdce117f432")
            .then((res) => {
                // mettre ces genres dans la constante 
                setGenres(res.data.genres);
            })
            //  s'il y a une erreur, on le met dans la console
            .catch((error) => {
                console.error("Error fetching genres:", error);
            });
    }, []);

    // Ceci est la déclaration d'une fonction nommée getGenreNames qui prend un argument genreIds. 
    const getGenreNames = (genreIds) => {
        // La méthode map() est utilisée pour créer un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine (genreIds dans ce cas). Ici, pour chaque genreId dans genreIds, une fonction anonyme est utilisée (définie avec une fonction fléchée).
        return genreIds.map(genreId => {
            // Dans chaque itération de map(), la méthode find() est utilisée pour trouver l'objet de genre correspondant dans le tableau genres où la propriété id correspond à genreId. Cette méthode retourne le premier élément trouvé qui satisfait la condition donnée.
            const genre = genres.find(genre => genre.id === genreId);
            // Si un objet de genre correspondant est trouvé, la propriété name de cet objet est retournée. Sinon, une chaîne vide ("") est retournée.
            return genre ? genre.name : "";
        });
    };

    return (
        <li className="card">
            <div className="card-content">
                {/* Affiche du film */}
                <img src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} />
                {/* Titre du film */}
                <h3> {results.original_title} </h3>
                {/* Date de sortie */}
                <span> Sortie le : <Moment format="DD/MM/YYYY" >{results.release_date}</Moment></span>
                {/*  Note des telespectateur */}
                <h3>{results.vote_average.toFixed(1)}/10 <span style={{ color: '#ffb703' }}>&#9733;</span></h3>
                {/* Genre du film */}
                <div className="result">
                    {getGenreNames(results.genre_ids).map((genre, index) => (
                        <span className=' genreBadge' key={index}>{genre}</span>
                    ))}
                </div>

                <h2> Synopsis : </h2>
                <p> {results.overview} </p>
                <button className='btn'>Ajouter aux coup de coeur</button>
            </div>
        </li >
    );
};

export default Cards;