// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
import { Results } from '../Results/Results';
import { Cart } from '../Cart/Cart';
import { fetchFoodData } from '../../data/apicalls';
import './App.css';

export const App = () => {
  const [searchedResults, setSearchedResults] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleSearch = (query) => {
    fetchFoodData(query)
      .then(data => {
        setSearchedResults(data.hints || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setSearchedResults([]);
      });
  };

  const addToCart = (item) => {
    setSelected(selectedToBuy => [...selectedToBuy, item]);
  };

  const deleteSelected = (item) => {
    console.log('cart item', item)
    console.log('before delete', selected)
    const filterSelected = selected.filter(selected => selected !== item);
    console.log('after delete', filterSelected)
    setSelected(filterSelected);
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/results" element={<Results searchedResults={searchedResults} addToCart={addToCart} />} />
        <Route exact path="/cart" element={<Cart selected={selected} deleteSelected={deleteSelected}/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
};