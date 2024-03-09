import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchFoodData } from '../../data/apicalls';
import './SearchBar.css';

export const SearchBar = () => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-inner">
        <input
          type="text"
          id="myInput"
          value={value}
          onChange={onChange}
          placeholder="Search food"
        />
        <NavLink to="/results">
          <button className="search-button" onClick={() => fetchFoodData(value).then(data => {
          // console.log('hi',data);
          localStorage.setItem('apiData', JSON.stringify(data));
          // console.log(JSON.parse(localStorage.apiData.hints));
          // setFood(data.hints || []); // Ensure that data.hints is not undefined
        })}>Search</button>
        </NavLink>
      </div>
    </div>
  );
};
