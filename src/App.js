import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favoris from './pages/Favoris';

const App = () => {
  return (
    // navigation
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Favoris' element={<Favoris />} />
        {/* on dit que tu renvoie sur Home quoiquil arrive */}
        <Route path='*' element={<Home />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;