import React from 'react'
import { connect } from 'react-redux'
import fire from '../config/fire'
import { compose } from 'redux'
import { addLink, deleteLink, listLinks } from '../store/links/actions'
import { listTopics } from '../store/topics/actions'
import { setUser } from '../store/user/actions'

const mapStateToProps = state => ({
    user: state.user.user,
})

const withUser = WrappedComponent => {
    class WithUser extends React.Component {
        state = {
            //user: null,
        }

        logout = () => {

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

const mapDispatchToProps = dispatch => {
    return {
        listTopics: () => dispatch(listTopics()),
        listLinks: () => dispatch(listLinks()),
    }
}

const composedWithUser = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withUser,
)

export default composedWithUser
