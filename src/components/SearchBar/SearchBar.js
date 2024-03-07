import React, { useState } from 'react';
import './SearchBar.css';

export const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = (searchTerm) => {
    onSearch(searchTerm);
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
        <button className="search-button" onClick={() => handleSearch(value)}>Search</button>
      </div>
    </div>
  );
};

