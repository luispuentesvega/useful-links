import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BurgerMenu from '../components/UI/BurgerMenu/BurgerMenu'
import withUser from '../hoc/withUser'
import { connect } from 'react-redux'
import { setUser } from '../store/user/actions'
import fire from '../config/fire'

const divWelcome = {
    background: '#764ABC',
    fontSize: '1.5rem',
    padding: '6px 20px',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
}

const mapStateToProps = state => ({
    user: state.user.user,
})

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser()),
})

const Header = props => {
    const [show, setShow] = useState(false)

    const handleMenuIcon = () => {
        setShow(!show)
    }

    const isLoggedIn = () => {
        return props.user != null
    }

    const logOut = () => {
        fire.auth().signOut()
        props.setUser(null)
        //this.props.history.push('/')
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
                        {!isLoggedIn() ? (
                            <NavLink className="header__button" to="/login">
                                Login
                            </NavLink>
                        ) : null}
                    </Fragment>
                )}
            </div>
            {isLoggedIn() ? (
                <div style={divWelcome}>
                    {' '}
                    <span>Welcome! {props.user || ''}</span>
                    <span>
                        <a onClick={logOut}>Logout</a>
                    </span>
                </div>
            ) : null}
        </Fragment>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header)
