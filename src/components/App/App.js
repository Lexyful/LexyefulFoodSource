import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
import { Results } from '../Results/Results';
import { Cart } from '../Cart/Cart';
import { fetchFoodData } from '../../data/apicalls';
import './App.css';

export const App = () => {
  const [searchedResults, setSearchedResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSearch = (query) => {
      fetchFoodData(query)
          .then(data => {
              if (data.hints) {
                  const newArray = data.hints.map(hint => ({
                      id: hint.food.foodId,
                      label: hint.food.label,
                      image: hint.food.image,
                  }));
                  setSearchedResults(newArray);
              } else {
                  setSearchedResults([]);
              }
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              setSearchedResults([]);
          });
  };

  const addToCart = (product) => {
      const cartItemIndex = selectedItems.findIndex(item => item.id === product.id);
      if (cartItemIndex !== -1) {
          const updatedItems = [...selectedItems];
          updatedItems[cartItemIndex].quantity++;
          setSelectedItems(updatedItems);
      } else {
          const newItem = { ...product, quantity: 1 };
          setSelectedItems([...selectedItems, newItem]);
      }
  };

  const deleteSelectedItem = (item) => {
      const updatedItems = selectedItems.filter(selectedItem => selectedItem.id !== item.id);
      setSelectedItems(updatedItems);
  };

  const clearCart = () => {
      setSelectedItems([]);
  };

  const addOneItem = (item) => {
      const updatedItems = selectedItems.map(selectedItem => {
          if (selectedItem.id === item.id) {
              return { ...selectedItem, quantity: selectedItem.quantity + 1 };
          }
          return selectedItem;
      });
      setSelectedItems(updatedItems);
  };

  const removeOneItem = (item) => {
      const updatedItems = selectedItems.map(selectedItem => {
          if (selectedItem.id === item.id && selectedItem.quantity > 0) {
              return { ...selectedItem, quantity: selectedItem.quantity - 1 };
          }
          return selectedItem;
      });
      setSelectedItems(updatedItems);
  };

  const calculateTotalQuantity = selectedItems.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0);

  const checkOut = () => {
      if (selectedItems.length === 0) {
          alert('There are no items in your cart. Search for what you want to purchase and items will be added.');
      } else {
          alert(`Thank you. You purchased ${calculateTotalQuantity} items!`);
          clearCart();
      }
  };

  return (
      <div className="App">
          <Header handleSearch={handleSearch} calculateTotalQuantity={calculateTotalQuantity} />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/results" element={<Results searchedResults={searchedResults} addToCart={addToCart} />} />
              <Route exact path="/cart" element={<Cart selectedItems={selectedItems} deleteSelectedItem={deleteSelectedItem} addOneItem={addOneItem} removeOneItem={removeOneItem} checkOut={checkOut} calculateTotalQuantity={calculateTotalQuantity} clearCart={clearCart} />} />
              <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
      </div>
  );
};