import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <NavLink className="header__button" exact to="/">Home</NavLink>
            <NavLink className="header__button" to="/topics">Topics</NavLink>
            <NavLink className="header__button" to="/about">About</NavLink>
            <NavLink className="header__button" to="/login">Login</NavLink>
        </div>
    );
};

export default Header;