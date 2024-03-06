import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FoodItem.css';

const FoodItem = ({ foods }) => {
  const { id } = useParams();
  const food = foods.find((food) => food.foodId === id);

  if (!food) {
    return <div>Food not found</div>;
  }

  const { label, image, nutrients } = food;

  return (
    <div className="food-item-container">
      <div className="food-item-contents">
        <h2 className="food-item-label">{label}</h2>
        {image && <img className="food-item-image" src={image} alt={label} />}
        <div className="food-item-nutrients">
          <h3>Nutrients</h3>
          <ul>
            {Object.entries(nutrients).map(([nutrient, value]) => (
              <li key={nutrient}>
                <strong>{nutrient}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
