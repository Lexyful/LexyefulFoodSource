import { NavLink, Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Header.css";

export const Header = ({ handleSearch, selectedItems }) => { 
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
                <button className="cart-click">Cart <span>{selectedItems.length || 0 }</span></button>
            </NavLink>
        </div>
    );
};
