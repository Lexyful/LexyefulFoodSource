import React from 'react';
import { FoodItem } from '../../FoodItem/FoodItem';
import './Cart.css';
import { NavLink } from 'react-router-dom';

export const Cart = ({ selected, deleteSelected, clearCart }) => {
    console.log('HELLO', selected)
    const checkOut = () => {
        if(selected.length === 0) {
                alert('There are no items in your cart. Search for what you want to purchase and items will be added.') 
        } else {
            alert('look at all this food!')
            clearCart()
        }
    }
  return (
    <div className="cart-container">
      <h2>This is your Cart</h2>
      <div className="cart-items">
        {selected.map((item, index) => (
            <>        
                <FoodItem key={index} item={item} handleItem={deleteSelected} buttonDistinction={'remove from cart'} />
                <p>{item.quantity}</p>
            </>
        ))}
      </div>
      <NavLink to="/" >
        <button onClick={checkOut}>Checkout</button>
      </NavLink>
    </div>
  );
};

