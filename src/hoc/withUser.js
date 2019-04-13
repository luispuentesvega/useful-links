import React from 'react'
import { connect } from 'react-redux'
import fire from '../config/fire'
import { compose } from 'redux'

const mapStateToProps = state => ({
    user: state.user.user,
})

const withUser = WrappedComponent => {
    class WithUser extends React.Component {
        state = {
            //user: null,
        }

        logout = () => {
            fire.auth().signOut()
        }

        render() {
            return (
                <WrappedComponent
                    user={this.props.user}
                    logOut={this.logout}
                    {...this.props}
                />
            )
        }
    }

    return WithUser
}

const composedWithUser = compose(
    connect(
        mapStateToProps,
        null,
    ),
    withUser,
)

export default composedWithUser
