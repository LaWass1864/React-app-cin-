import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Cards from '../components/Cards';

const Favoris = () => {
    const [listData, setListData] = useState([])
    useEffect(() => {

        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(',') : [];
        //  on parcours les movies.id
        for (let i = 0; i < moviesId.length; i++) {
            axios
            //  on va recuperer les id des movies
            .get(`http://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=c906cb5d4e8234c1ed739bdce117f432`)
                //On push les favoris dans la page des Favoris
                .then((res) => setListData((listData) => [...listData, res.data]));
        }

    }, []);


    return (
        <div className='user-list-page'>
            <Header />
            <h2> Coups de coeur <span> ❤️ </span></h2>
            <div className='result'>
                {/*  est ce que listdata.lenght est sup a 0  */}
                {listData.length > 0 ? (
                    listData.map((movie) => <Cards movie={movie} key={movie.id} />)
                ) : (
                    //  sinon on met un ce titre
                    <h2> Aucun coup de coeur pour le moment</h2>
                )}
            </div>
        </div>
    );
};


export default Favoris;