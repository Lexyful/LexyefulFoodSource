import React from 'react';
import { FoodItem } from '../../FoodItem/FoodItem';
import './Cart.css';

export const Cart = ({ selected, deleteSelected }) => {

  return (
    <div className="cart-container">
      <h2>This is your Cart</h2>
      <div className="cart-items">
        {selected.map((item, index) => (
        <FoodItem item={item} handleItem={deleteSelected} buttonDistinction={'remove from cart'} />
        ))}
      </div>
    </div>
  );
};

