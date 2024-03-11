import React from 'react';
import './FoodItem.css'

export const FoodItem = ({ item, handleItem, buttonDistinction, index }) => {
  return (
    <div key={index} className="food-item-card">
      <img src={item.image || ''} alt={item.label} className="food-item-image" />
      <button onClick={() => handleItem(item)}  className="delete-button">{buttonDistinction}</button>
    </div>
  );
};
