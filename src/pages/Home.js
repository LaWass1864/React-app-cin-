import React, { useState } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Movies from '../components/Movies';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (searchValue) => {
        setSearchTerm(searchValue);
    };

    return (
        <div>
            <Header />
            <Form  />
            <Movies />
        </div>
    );
};

export default Home;
