// Cart.js
import React from 'react';
import './Cart.css';

export const Cart = ({ selected }) => {
  return (
    <div className="cart-container">
      <h2>This is your Cart</h2>
      <div className="cart-items">
        {selected.map((item, index) => (
          <div key={index} className="cart-item-image">
            <img src={item.food.image} alt={item.food.label} />
          </div>
        ))}
      </div>
    </div>
  );
};



// export const Cart = () => {

//     return (
//       <div className="cart-container">
//         <h2>This is your Cart</h2>
//       </div>
//     );
//   };