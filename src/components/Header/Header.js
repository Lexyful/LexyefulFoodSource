import { NavLink, Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Header.css";

export const Header = ({ handleSearch }) => { 
    return (
        <div className="header-container">
            <NavLink to="/">
                <button className="home-click">Home</button>
            </NavLink>
            <h1>
                <Link to="/">Lexyeful Food Source</Link>
                </h1>
            <SearchBar handleSearch={handleSearch} /> 
            <NavLink to="/cart">
                <button className="cart-click">Cart</button>
            </NavLink>
        </div>
    );
};
