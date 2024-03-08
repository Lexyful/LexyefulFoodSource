import { NavLink } from "react-router-dom"

export const Header = () => {

    return (
        <header>
            <NavLink to="/">
                <p>Home</p>
            </NavLink>
            <h1>Lexyeful Food Source</h1>
            <NavLink to="/cart">
                <p>Cart</p>
            </NavLink>
        </header>
    )
}