import React from 'react'
import Spinner from '../ChildBlock/LinkForm'
import Input from '../UI/Inputs/Input'
import InputError from '../UI/InputError/InputError'
import Button from '../UI/Buttons/Button'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const buttonStyle = {
    background: '#fff',
    color: '#764ABC',
}

const registerStyle = {
    fontSize: '1.5rem',
}

const buttonRegister = {
    color: 'blue',
    cursor: 'pointer',
}

const LoginForm = props => {
    return (
        <div className="child">
            {props.isLoading ? (
                <Spinner />
            ) : (
                <form onSubmit={props.onSubmit}>
                    <h1>Login</h1>
                    <Input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={props.email}
                        onChange={props.onChangeInput}
                    />
                    <InputError
                        isValidating={props.isValidating}
                        value={props.email}
                    >
                        Must fill up the email
                    </InputError>
                    <Input
                        type="password"
                        placeholder="*******"
                        name="password"
                        value={props.password}
                        onChange={props.onChangeInput}
                    />
                    <InputError
                        isValidating={props.isValidating}
                        value={props.password}
                    >
                        Must fill up the password
                    </InputError>

                    <Button buttonName="LOGIN" type="submit" />
                    <br />
                    <Button
                        buttonName="Login with GMAIL"
                        style={buttonStyle}
                        onClick={props.onGmailLogin}
                        type="button"
                    />
                    <br />
                    <br />
                    <div style={registerStyle}>
                        <span>
                            Don't have an account{' '}
                            <span className="notification__button">
                                <NavLink style={buttonRegister} to="/register">
                                    Register
                                </NavLink>
                            </span>
                        </span>
                    </div>
                </form>
            )}
        </div>
    )
}

LoginForm.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isValidating: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onGmailLogin: PropTypes.func.isRequired,
    onRegister: PropTypes.func.isRequired,
}

LoginForm.defaultProps = {
    isLoading: true,
}

export default LoginForm
