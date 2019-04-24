import React, { Component } from 'react'
import fire from '../config/fire'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginBlock/LoginForm'
import withUser from '../hoc/withUser'
import * as util from '../utils/utils'
import { setUser } from '../store/user/actions'

import firebase from 'firebase'

class Login extends Component {
    state = {
        isLoading: false,
        isValidating: false,
        email: '',
        password: '',
    }

    onLogIn = e => {
        this.setState({ isValidating: true })
        e.preventDefault()
        fire.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                console.log('res::', res)
                this.props.history.push('/')
            })
            .catch(error => {
                console.log('error::', error.message)
                util.error(error.message)
            })
    }

    onChangeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onGmailLogin = e => {
        var provider = new firebase.auth.GoogleAuthProvider()

        provider.addScope('profile')
        provider.addScope('email')

        let _this = this

        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function(result) {
                const user = result.user
                localStorage.setItem('user', user.email)
                localStorage.setItem('uid', user.uid)
                _this.props.setUser(user.email)
                _this.props.history.push('/')
            })
    }

    onRegister = () => {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div className="container container-simple">
                {this.props.user && this.props.user.email !== null ? (
                    <div> You're Logged in : {this.props.user.email}</div>
                ) : (
                    <LoginForm
                        onSubmit={this.onLogIn}
                        onRegister={this.onRegister}
                        onChangeInput={this.onChangeInput}
                        onGmailLogin={this.onGmailLogin}
                        isLoading={this.state.isLoading}
                        email={this.state.email}
                        password={this.state.password}
                        isValidating={this.state.isValidating}
                    />
                )}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUser: user => dispatch(setUser(user)),
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(withUser(Login))
