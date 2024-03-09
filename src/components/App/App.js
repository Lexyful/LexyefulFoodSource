import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
import { Results } from '../Results/Results';
import { Cart } from '../Cart/Cart';
import { fetchFoodData } from '../../data/apicalls'; // Import the API call function
import './App.css';

export const App = () => {
  const [searchedResults, setSearchedResults] = useState([]);

  // Function to handle search
  const handleSearch = (query) => {
    fetchFoodData(query)
      .then(data => {
        setSearchedResults(data.hints || []); // Update searchedResults state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setSearchedResults([]); // Reset searchedResults state if there's an error
      });
  };

  return (
    <div className="App">
      <Header handleSearch={handleSearch} /> {/* Pass handleSearch function to Header */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/results" element={<Results searchedResults={searchedResults} />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
};