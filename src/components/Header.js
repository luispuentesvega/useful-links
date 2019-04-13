import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BurgerMenu from '../components/UI/BurgerMenu/BurgerMenu'
import { connect } from 'react-redux'
import { setUser } from '../store/user/actions'
import fire from '../config/fire'
import Menu from '../components/HeaderBlock/Menu'

const divMainWelcome = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const divWelcome = {
    background: '#764ABC',
    fontSize: '1.5rem',
    padding: '6px 20px',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '900px',
}

const logoutStyle = {
    cursor: 'pointer',
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
    }

    return (
        <Fragment>
            <div className="header">
                <div className="header__items">
                    <BurgerMenu show={show} click={handleMenuIcon} />
                    {show && <Menu isLoggedIn={isLoggedIn()} />}
                </div>

                <div className="header__pcitems">
                    <Menu isLoggedIn={isLoggedIn()} />
                </div>
            </div>
            {isLoggedIn() ? (
                <div style={divMainWelcome}>
                    <div style={divWelcome}>
                        {' '}
                        <span>Welcome! {props.user || ''}</span>
                        <span>
                            <span
                                className="logout"
                                style={logoutStyle}
                                onClick={logOut}
                            >
                                Logout
                            </span>
                        </span>
                    </div>
                </div>
            ) : null}
        </Fragment>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header)
