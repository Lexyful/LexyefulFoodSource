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
        if (data.hints){
          let newArray = []
          for (let i = 0; i < data.hints.length; i++){
            const updatedItem = {
              id: data.hints[i].food.foodId, 
              label: data.hints[i].food.label,
              image: data.hints[i].food.image,
            }
            newArray.push(updatedItem)
          }
          setSearchedResults(newArray)
        } else {
          setSearchedResults([])
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setSearchedResults([]);
      });
    };

    const addToCart = (product) => {
      const cartItems = selectedItems.findIndex(item => item.id === product.id);
      if (cartItems !== -1) {
        const updatedResults = [...selectedItems];
        updatedResults[cartItems].quantity++;
        setSelectedItems(updatedResults);
      } else {
        const newItem = { ...product, quantity: 1 };
        setSelectedItems([...selectedItems, newItem]);
      }
    };

  const deleteSelectedItem = (item) => {
    const filterSelectedItem = selectedItems.filter(selectedItems => selectedItems !== item);
    setSelectedItems(filterSelectedItem);
  }

  const clearCart = () => {
    setSelectedItems([])
  }

  const addOneItem = (item) => {
    const updatedSelected = selectedItems.map(selectedItems => {
      if (selectedItems.id === item.id) {
        return { ...selectedItems, quantity: selectedItems.quantity + 1 };
      }
      return selectedItems;
    });
    setSelectedItems(updatedSelected);
  };

  const removeOneItem = (item) => {
    const updatedSelected = selectedItems.map(selectedItems => {
      if (selectedItems.id === item.id && selectedItems.quantity > 0) {
        return { ...selectedItems, quantity: selectedItems.quantity - 1 };
      }
      
      return selectedItems;
    });
    setSelectedItems(updatedSelected);
  };

  const calculateTotalQuantity = selectedItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity;
}, 0);

const checkOut = () => {
    if (selectedItems.length === 0) {
        alert('There are no items in your cart. Search for what you want to purchase and items will be added.');
    } else {
        alert(`Thank you. You purchased ${calculateTotalQuantity} items!`);
        clearCart();
    }
}


  return (
    <div className="App">
      <Header handleSearch={handleSearch} calculateTotalQuantity={calculateTotalQuantity}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/results" element={<Results searchedResults={searchedResults} addToCart={addToCart} />} />
        <Route exact path="/cart" element={<Cart selectedItems={selectedItems} deleteSelectedItem={deleteSelectedItem} addOneItem={addOneItem}  removeOneItem={removeOneItem}  checkOut={checkOut} calculateTotalQuantity={calculateTotalQuantity} clearCart={clearCart}/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
};