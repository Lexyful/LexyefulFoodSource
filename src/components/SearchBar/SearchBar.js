import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SearchBar.css';

export const SearchBar = ({ handleSearch }) => { 
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    handleSearch(value.trim()); 
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
          <button className="search-button" onClick={handleButtonClick}>Search</button>
        </NavLink>
      </div>
    </div>
  );
};
