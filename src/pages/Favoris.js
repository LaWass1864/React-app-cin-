import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const Favoris = () => {
    const [listData, setListData] = useState([])
    useEffect(() => {
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(',') : [];
        //  on parcour les movies.id
        for (let i = 0; i < moviesId.length; i++) {
            axios.get(`http://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=c906cb5d4e8234c1ed739bdce117f432`)
            //On destructure pour ne pas que les ID s'ecrasent.
            .then((res) => setListData(listData => [...listData,res.data]));

        }
    }, []);


    return (
        <div className='user-list-page'>
            <Header />
            <h2> Coups de coeur <span> ❤️ </span></h2>
            <div className='result'>

            </div>
        </div>
    );
};


export default Favoris;