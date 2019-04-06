import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BurgerMenu from '../components/UI/BurgerMenu/BurgerMenu'

const Header = () => {
    const [show, setShow] = useState(false)

    const handleMenuIcon = () => {
        setShow(!show)
    }

    return (
        <Fragment>
            <div className="header">
                <BurgerMenu show={show} click={handleMenuIcon} />
                {show && (
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
                        <NavLink className="header__button" to="/login">
                            Login
                        </NavLink>
                    </Fragment>
                )}
            </div>
        </Fragment>
    )
}

export default Header
