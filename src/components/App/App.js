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
  const [selected, setSelected] = useState([]);

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
            console.log('updated', updatedItem)
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
      const existingItemIndex = selected.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        const updatedResults = [...selected];
        updatedResults[existingItemIndex].quantity++;
        setSelected(updatedResults);
      } else {
        const newItem = { ...product, quantity: 1 };
        setSelected([...selected, newItem]);
      }
    };

  const deleteSelected = (item) => {
    console.log('cart item', item)
    console.log('before delete', selected)
    const filterSelected = selected.filter(selected => selected !== item);
    console.log('after delete', filterSelected)
    setSelected(filterSelected);
  }

  const clearCart = () => {
    setSelected([])
  }

  const decrementItem = (item) => {
    const updatedSelected = selected.map(selectedItem => {
      if (selectedItem.id === item.id && selectedItem.quantity > 0) {
        return { ...selectedItem, quantity: selectedItem.quantity - 1 };
      }
      return selectedItem;
    });
    setSelected(updatedSelected);
  };

  const incrementItem = (item) => {
    const updatedSelected = selected.map(selectedItem => {
      if (selectedItem.id === item.id) {
        return { ...selectedItem, quantity: selectedItem.quantity + 1 };
      }
      return selectedItem;
    });
    setSelected(updatedSelected);
  };

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/results" element={<Results searchedResults={searchedResults} addToCart={addToCart} />} />
        <Route exact path="/cart" element={<Cart selected={selected} deleteSelected={deleteSelected} decrementItem={decrementItem} incrementItem={incrementItem} clearCart={clearCart}/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
};