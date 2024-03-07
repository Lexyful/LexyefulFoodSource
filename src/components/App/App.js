import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../Home/Home';
import { FoodItem } from '../FoodItem/FoodItem';
import './App.css';
import { fetchFoodData } from '../../data/apicalls';

export const App = () => {
  const [food, setFood] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFoodData('apple')
      .then(data => {
        console.log(data);
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
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home food={food} Link={Link} />} // Pass Link as a prop to Home
          />
          <Route path="/food/:id" element={<FoodItem />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
};
