import React from 'react';

const Cards = ({ results }) => {
   

    return (
        <li className="card">
            <div className="card-content">
            <img  src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} />
                <h2> {results.original_title} </h2>
                <em> {"Sorti le " + results.release_date} </em>
                <h3>{results.vote_average.toFixed(1)} <span style={{color: '#ffb703'}}>&#9733;</span></h3>
                <h2> Synopsis : </h2>
                <p> {results.overview} </p>
                <button className='btn'>Ajouter aux coup de coeur</button>
            </div>
        </li>
    );
};

export default Cards;