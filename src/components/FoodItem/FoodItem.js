import React from 'react';
import './FoodItem.css';

export const FoodItem = ({ food }) => {
  return (
    <div className="food-item-container">
      <div className="food-item-contents">
        <h2 className="food-item-label">Food Items</h2>
        <div className="food-items">
          {/* Iterate over each food item and render its image */}
          {food.map((item, index) => (
            <div key={index} className="food-item">
              {item.food.image && (
                <img
                  className="food-item-image"
                  src={item.food.image}
                  alt={item.food.label}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
