import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = ({ food }) => {
  const [showDescription] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const filteredFood = food.filter((item) =>
    item.food.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFoodClick = (index) => {
    // Handle food item click here
  };

  const foodCards = filteredFood.map((item, index) => (
    <div className="food-card" key={index}>
      <Link to={`/food/${index}`} onClick={() => handleFoodClick(index)}>
        <h2 className="food-label">{item.food.label}</h2>
        {item.food.image && (
          <img className="food-image" src={item.food.image} alt={item.food.label} />
        )}
      </Link>
    </div>
  ));

  return (
    <div className="home-container">
      <div className="searched-food-grid">{foodCards}</div>
      <Link to="/cart" className="cart-button">My Cart</Link> {/* Add My Cart button */}
    </div>
  );
};
