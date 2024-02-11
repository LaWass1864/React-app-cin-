import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favoris from './pages/Favoris';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Favoris' element={<Favoris />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;