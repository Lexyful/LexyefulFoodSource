import React from 'react';
import './FoodItems.css';

export const FoodItem = ({ food }) => {

  
  return (
    <div className="food-item-container">
      <div className="food-grid">
        <div className="food-items">
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
    // const foodItem = food[id]

    // if (!food) {
    //   return <div>Food not found</div>;
    // }

    // // const {hints, foodId }