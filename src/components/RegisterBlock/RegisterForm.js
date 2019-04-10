import React from 'react'
import Spinner from '../ChildBlock/LinkForm'
import Input from '../UI/Inputs/Input'
import InputError from '../UI/InputError/InputError'
import Button from '../UI/Buttons/Button'

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

const RegisterForm = props => {
    return (
        <div className="child">
            {props.loading ? (
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
                        validating={props.validating}
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
                        validating={props.validating}
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

export default RegisterForm
