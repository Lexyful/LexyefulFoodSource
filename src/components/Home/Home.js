import React, { useState, useEffect } from 'react';
import './Home.css';

export const Home = ({ food, Link }) => { 
  const [showDescription] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  return (
    <div>
      <h2>Home</h2>
      <div className="food-list">
        {food.map(item => (
          <Link key={item.food.foodId} to={`/food/${item.food.foodId}`} className="food-item-link">
            <div className="food-item">
              <img src={item.food.image} alt={item.food.label} />
              <h3>{item.food.label}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
