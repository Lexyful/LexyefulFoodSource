import React from 'react';
import { FoodItem } from '../../FoodItem/FoodItem';
import './Results.css';

export const Results = ({ searchedResults, addToCart }) => {
  console.log('hi it me searched result', searchedResults)
  return (
    <div>
      {searchedResults.length > 0 ? (
        <div className="results-container">
          <div className="food-grid">
            <div className="food-items">
              {searchedResults.map((item, index) => (
                <FoodItem key={index} item={item} handleItem={addToCart} buttonDistinction={'Add to Cart'} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h3>Sorry, no results found!</h3>
      )}
    </div>
  );
};




