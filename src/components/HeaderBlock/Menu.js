import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Menu = props => {
    return (
        <Fragment>
            <NavLink className="header__button" exact to="/">
                Home
            </NavLink>
            <NavLink className="header__button" to="/topics">
                Topics
            </NavLink>
            <NavLink className="header__button" to="/about">
                About
            </NavLink>
            {!props.isLoggedIn ? (
                <NavLink className="header__button" to="/login">
                    Login
                </NavLink>
            ) : null}
        </Fragment>
    )
}

Menu.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
}

Menu.defaultProps = {
    isLoggedIn: false,
}

export default Menu
