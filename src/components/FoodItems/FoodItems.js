import React from 'react';
import './FoodItems.css'

export const FoodItems = ({ item, addToCart }) => {
  const handleClick = () => {
    addToCart(item);
  }

  return (
    <div className="food-item-container" onClick={handleClick}>
      <img src={item.food.image} alt={item.food.label} className="food-item-image" />
    </div>
  );
};



// import React from 'react';
// import './FoodItems.css'

// export const FoodItems = ({searchedResults, selected }) => {
//   const addToCart = () => {

//   }

//   return (
//     <div className="food-item-container">
      
//     </div>
//   );
// };
