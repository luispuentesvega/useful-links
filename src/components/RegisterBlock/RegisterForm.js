import React from 'react'
import Spinner from '../ChildBlock/LinkForm'
import Input from '../UI/Inputs/Input'
import InputError from '../UI/InputError/InputError'
import Button from '../UI/Buttons/Button'
import PropTypes from 'prop-types'

const RegisterForm = props => {
    return (
        <div className="child">
            {props.isLoading ? (
                <Spinner />
            ) : (
                <form onSubmit={props.onSubmit}>
                    <h1>Register</h1>
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

                    <Button buttonName="REGISTER" type="submit" />
                </form>
            )}
        </div>
    )
}

RegisterForm.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isValidating: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}

export default RegisterForm
