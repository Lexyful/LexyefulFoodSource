import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FoodItem from '../FoodItem/FoodItem'; 

function App() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=c7433c34&app_key=a05fb60503e8524c058ebab2e9c5a273&ingr=[FOOD ITEM HERE]&nutrition-type=cooking')
      .then(response => {
        if (response.ok) {
          return response.json();
        } 
      })
      .then(data => {
        setFood(data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Lexyeful Food Source</h1>
      </header>
      <Router>
        <Routes>
          <Route exact path="/">
            {/* Your Home Component Here */}
          </Route>
          <Route path="/food/:id" element={<FoodItem food={food} />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
      <div className="food-list">
        {food.map(item => (
          <div key={item.foodId} className="food-item">
            <img src={item.image} alt={item.label} />
            <h3>{item.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
