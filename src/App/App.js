import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import FoodItem from '../FoodItem/FoodItem';

function App() {

  
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&ingr=[FOOD ITEM HERE]&nutrition-type=cooking`);
        if (response.ok) {
          const data = await response.json();
          setFood(data?.hints || []);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch food items');
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchFoodItems();
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
          <Route path="/food/:id" element={<FoodItem />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
      <div className="food-list">
        {loading ? (
          <div>Loading...</div>
        ) : (
          food.map(item => (
            <div key={item.food.foodId} className="food-item">
              <img src={item.food.image} alt={item.food.label} />
              <h3>{item.food.label}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
