import React from 'react';
import './Results.css';

export const Results = ({ searchedResults }) => {
  return (
    <div>
      {searchedResults.length > 0 ? (
        <div className="results-container">
          <div className="food-grid">
            <div className="food-items">
              {searchedResults.map((item, index) => (
                <div key={index} className="food-item">
                  {item.food.image && (
                    <img
                      className="food-item-image"
                      src={item.food.image}
                      alt={item.food.label}
                    />
                  )}
                </div>
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
