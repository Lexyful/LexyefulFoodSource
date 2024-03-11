import React from 'react';
import { FoodItem } from '../../FoodItem/FoodItem';
import './Results.css';

export const Results = ({ searchedResults, addToCart }) => {
  const noDupes = searchedResults.filter((item, index, self) =>
    index === self.findIndex((t) => (
      t.id === item.id
    ))
  );

  return (
    <div>
      {noDupes.length > 0 ? (
        <div className="results-container">
          <div className="food-grid">
            <div className="food-items">
              {noDupes.map((item, index) => (
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



