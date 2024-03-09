// App.js
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

  // Function to handle search
  const handleSearch = (query) => {
    fetchFoodData(query)
      .then(data => {
        setSearchedResults(data.hints || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setSearchedResults([]);
      });
  };

  // Function to add item to cart
  const addToCart = (item) => {
    setSelected(selectedToBuy => [...selectedToBuy, item]);
  };

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/results" element={<Results searchedResults={searchedResults} addToCart={addToCart} />} />
        <Route exact path="/cart" element={<Cart selected={selected} />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
};




// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { Header } from '../Header/Header';
// import { Home } from '../Home/Home';
// import { Results } from '../Results/Results';
// import { Cart } from '../Cart/Cart';
// import { fetchFoodData } from '../../data/apicalls'; // Import the API call function
// import './App.css';

// export const App = () => {
//   const [searchedResults, setSearchedResults] = useState([]);
//   const [selected, setSelected] = useState([])

//   // Function to handle search
//   const handleSearch = (query) => {
//     fetchFoodData(query)
//       .then(data => {
//         setSearchedResults(data.hints || []); // Update searchedResults state with fetched data
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setSearchedResults([]); // Reset searchedResults state if there's an error
//       });
//   };
//   const addToCart = (hints) => {
//     if (!selected.includes(hints)) {
//       setSelected([...selected, hints]);
//     }
//   };


//   return (
//     <div className="App">
//       <Header handleSearch={handleSearch} /> {/* Pass handleSearch function to Header */}
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/results" element={<Results searchedResults={searchedResults} />} />
//         <Route exact path="/cart" element={<Cart selected={selected} addToCart={addToCart}/>} />
//         <Route path="*" element={<div>404 Not Found</div>} />
//       </Routes>
//     </div>
//   );
// };