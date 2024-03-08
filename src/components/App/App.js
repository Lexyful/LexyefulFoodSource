import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../Home/Home';
import { FoodItem } from '../FoodItem/FoodItem';
import { SearchBar } from '../SearchBar/SearchBar';
import './App.css';
import { fetchFoodData } from '../../data/apicalls';

export const App = () => {
  const [food, setFood] = useState([]);
  const[selected, setSelected] = useState([])
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFoodData('food')
      .then(data => {
        console.log('hi',data);
        setFood(data.hints || []); // Ensure that data.hints is not undefined
      })
      .catch(err => {
        setError(`Sorry there was a ${err.message} error please try again`);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Lexyeful Food Source</h1>
      </header>
      <SearchBar />
      <h2>Welcome to your friendly online grocery store</h2>
      <h3>Search for the food you're looking for and add to your cart as you shop!</h3>

      {/* <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home food={food} Link={Link} />} // Pass Link as a prop to Home
          />
          <Route path="/food/:id" element={<FoodItem food={food} />} /> 
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router> */}
    </div>
  );
};
