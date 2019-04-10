import React, { Component } from 'react'
import fire from '../config/fire'
import firebase from 'firebase'
import { connect } from 'react-redux'
import withUser from '../hoc/withUser'
import * as util from '../utils/utils'
import { setUser } from '../store/user/actions'
import RegisterForm from '../components/RegisterBlock/RegisterForm'

class Register extends Component {
    state = {
        loading: false,
        validating: false,
        email: '',
        password: '',
    }

    onChangeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        fire.auth()
            .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password,
            )
            .then(res => {
                console.log('u::::::', res.user.email)
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
                        loading={this.state.loading}
                        email={this.state.email}
                        password={this.state.password}
                        validating={this.state.validating}
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
