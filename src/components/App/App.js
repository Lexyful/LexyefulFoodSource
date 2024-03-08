import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../../Header/Header';
import { SearchBar } from '../SearchBar/SearchBar';
import { Home } from '../Home/Home';
import { Results } from '../Results/Results';
import { Cart } from '../Cart/Cart'
import './App.css';

export const App = () => {
  const storedData = localStorage.getItem('apiData');
    if (storedData) {
      // If data exists in local storage, parse it from JSON format
      JSON.parse(storedData);
    }
  return (
    <div className="App">
      <Header />
      {/* <SearchBar /> */}
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/results" element={<Results searchedResults={storedData} />}/>
          <Route exact path="/cart" element={<Cart />}/>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    </div>
  );
};
