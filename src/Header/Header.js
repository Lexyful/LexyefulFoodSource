import { NavLink } from "react-router-dom"
import { SearchBar } from "../components/SearchBar/SearchBar"

export const Header = () => {

    return (
        <header>
            <NavLink to="/">
                <p>Home</p>
            </NavLink>
            <h1>Lexyeful Food Source</h1>
            <SearchBar />
            <NavLink to="/cart">
                <p>Cart</p>
            </NavLink>
        </header>
    )
}