import React from 'react';
import './Home.css';

// export const Home = ({ food }) => {
  export const Home = () => {
  // const [showDescription] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearchChange = (value) => {
  //   setSearchQuery(value);
  // };

  // const filteredFood = food.filter((item) =>
  //   item.food.label.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const handleFoodClick = (index) => {
  //   // Handle food item click here
  // };

  // const foodCards = filteredFood.map((item, index) => (
  //   <div className="food-card" key={index}>
  //     <Link to={`/food/${index}`} onClick={() => handleFoodClick(index)}>
  //       <h2 className="food-label">{item.food.label}</h2>
  //       {item.food.image && (
  //         <img className="food-image" src={item.food.image} alt={item.food.label} />
  //       )}
  //     </Link>
  //   </div>
  // ));

  return (
    <div className="home-container">
      <h2>Welcome to your friendly online grocery store</h2>
      <h3>Search for the food you're looking for and add to your cart as you shop!</h3>
      {/* <div className="searched-food-grid">{foodCards}</div>
      <Link to="/cart" className="cart-button">My Cart</Link>  */}
    </div>
  );
};
