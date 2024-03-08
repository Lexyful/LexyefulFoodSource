import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from '../../Header/Header';
import { Home } from '../Home/Home';
import { FoodItem } from '../FoodItem/FoodItem';
import { SearchBar } from '../SearchBar/SearchBar';
import { Cart } from '../Cart/Cart'
import './App.css';
import { fetchFoodData } from '../../data/apicalls';

export const App = () => {
  // const [food, setFood] = useState([]);
  // const[selected, setSelected] = useState([])
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   fetchFoodData('food')
  //     .then(data => {
  //       console.log('hi',data);
  //       setFood(data.hints || []); // Ensure that data.hints is not undefined
  //     })
  //     .catch(err => {
  //       setError(`Sorry there was a ${err.message} error please try again`);
  //     });
  // }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      {/* <Router>  */}
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>
      {/* </Router> */}
  

      {/* <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home food={food} Link={Link} />} // Pass Link as a prop to Home
          />
          <Route path="/food/:id" element={<FoodItem food={food} />} /> 
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router> */}
    </div>
  );
};
