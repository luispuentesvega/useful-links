import React from 'react'

import Input from './../../components/UI/Inputs/Input';
import Button from './../../components/UI/Buttons/Button';
import ButtonLink from './../../components/UI/Links/ButtonLink';

class LoginForm extends React.Component {

    state = { email: '', password: '' }

    onInputChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onInputChangePassWord = (e) => {
        this.setState({ password: e.target.value })
    }

    onFormSubmitLogin = (e) => {
        // Login Sec.
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmitLogin}>
                <h1>Welcome to our website</h1>
                <Input text="text" value={this.state.email} placeholder="Email" onChange={this.onInputChangeEmail}/>
                <Input text="password" value={this.state.password} placeholder="Password" onChange={this.onInputChangePassWord}/>
                <Button type="submit" buttonName="Login" />
                <ButtonLink href="https://www.facebook.com" linkName="Login with facebook" />
                <ButtonLink href="https://www.google.com/gmail" linkName="Login with gmail" />
                <p>Don't have any account ? <a href="#">Register</a></p>
            </form>
        )
    } 
}

export default LoginForm