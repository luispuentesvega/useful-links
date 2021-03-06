import React, { Component } from 'react'
import fire from '../config/fire'
import { connect } from 'react-redux'
import * as util from '../utils/utils'
import { setUser } from '../store/user/actions'
import RegisterForm from '../components/RegisterBlock/RegisterForm'

class Register extends Component {
    state = {
        isLoading: false,
        isValidating: false,
        email: '',
        password: '',
    }

    onChangeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        this.setState({ isValidating: true })

        fire.auth()
            .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password,
            )
            .then(res => {
                this.props.setUser(res.user.email)
                this.props.history.push('/')
            })
            .catch(error => {
                console.log('error::', error.message)
                util.error(error.message)
            })
    }

    render() {
        return (
            <div className="container container-simple">
                {this.props.user && this.props.user.email !== null ? (
                    <div> You're Logged in : {this.props.user.email}</div>
                ) : (
                    <RegisterForm
                        onSubmit={this.onSubmit}
                        onChangeInput={this.onChangeInput}
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
)(Register)
