import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

const Cards = ({ results }) => {
    // formatter une date
    let date = moment("2022-12-22")

    return (
        <li className="card">
            <div className="card-content">
                {/* Affiche du film */}
                <img src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} />
                {/* Titre du film */}
                <h2> {results.original_title} </h2>
                {/* Date de sortie */}
                <span> Sortie le : <Moment format="DD/MM/YYYY" >{results.release_date}</Moment></span>
                <p>{results.genre_ids}</p>
                <h3>{results.vote_average.toFixed(1)} <span style={{ color: '#ffb703' }}>&#9733;</span></h3>
                {/* <span>{results.}</span> */}
                <h2> Synopsis : </h2>
                <p> {results.overview} </p>
                <button className='btn'>Ajouter aux coup de coeur</button>
            </div>
        </li>
    );
};

export default Cards;