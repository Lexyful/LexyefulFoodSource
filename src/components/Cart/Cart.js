import React from 'react';
import { FoodItem } from '../../FoodItem/FoodItem';
import './Cart.css';
import { NavLink } from 'react-router-dom';

export const Cart = ({ selected, deleteSelected, clearCart }) => {
    const calculateTotalQuantity = selected.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0);
    
    const checkOut = () => {
        if(selected.length === 0) {
            // window.confirm("Are you sure you want to proceed?");
                alert('There are no items in your cart. Search for what you want to purchase and items will be added.') 
        } else {
            alert(`Thank you. You purchased ${calculateTotalQuantity} items!`)
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
      <h2>Total quantity {calculateTotalQuantity}</h2>
      <NavLink to="/" >
        <button onClick={checkOut}>Checkout</button>
      </NavLink>
    </div>
  );
};

