import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import BlockList from './../components/ChildBlock/BlockList'
import { success, error } from '../utils/utils'
import LinkForm from '../components/ChildBlock/LinkForm'
import { listTopics } from '../store/topics/actions'
import { addLink, deleteLink, listLinks } from '../store/links/actions'
import * as util from '../utils/utils'
import fire from '../config/fire'
import { setUser } from '../store/user/actions'
import Notification from '../components/UI/Notification/Notification'
import { NavLink } from 'react-router-dom'

class Home extends Component {
    state = {
        isLoading: true,
        isValidating: false,
        isLoggedIn: false,
        url: '',
        title: '',
        topic: '',
        user: null,
    }

    hideLoader = () => {
        this.setState({ isLoading: false })
    }

    showLoader = () => {
        this.setState({ isLoading: true })
    }

    onChangeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    isValidTheForm = () => {
        this.setState({ isValidating: true })
        if (!this.state.title) {
            return false
        }
        if (!this.state.url) {
            return false
        }
        if (!this.state.topic) {
            return false
        }

        if (!util.isValidUrl.test(this.state.url)) {
            return false
        }

        return true
    }

    onFormSubmit = e => {
        e.preventDefault()
        if (!this.isValidTheForm()) {
            return false
        }
        this.props
            .add(this.state.topic, this.state.title, this.state.url)
            .then(() => {
                this.setState({
                    isValidating: false,
                    topic: '',
                    title: '',
                    url: '',
                })

                this.props.listLinks()
                success('Created successfully!')
            })
            .catch(() => {
                error()
            })
    }

    onDelete = id => {
        this.props
            .delete(id)
            .then(() => {
                success('Deleted successfully!')
            })
            .catch(() => {
                error()
            })
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        this.authListener().then(() => {
            this.props
                .listTopics()
                .then(() => {})
                .catch(err => {
                    console.log('err:', err)
                })

            this.props
                .listLinks()
                .then(() => {
                    this.setState({ isLoading: false })
                })
                .catch(err => {
                    console.log('err:', err)
                })
        })
    }

    authListener() {
        let _this = this
        return new Promise(function(resolve, reject) {
            fire.auth().onAuthStateChanged(user => {
                if (user) {
                    localStorage.setItem('user', user.email)
                    localStorage.setItem('uid', user.uid)
                    _this.props.setUser(user.email)
                    _this.setState({ isLoggedIn: true })
                } else {
                    _this.setState({ user: null })
                    localStorage.removeItem('user')
                    localStorage.removeItem('uid')
                    _this.setState({ isLoggedIn: false })
                }
                resolve()
            })
        })
    }

    render() {
        return (
            <Fragment>
                {!this.state.isLoggedIn && (
                    <div className="container">
                        <Notification>
                            <p>
                                If you want to have your private links, please
                                log in{' '}
                                <span className="notification__button">
                                    <NavLink to="/login">here</NavLink>
                                </span>
                            </p>
                        </Notification>
                    </div>
                )}
                <div className="container">
                    <LinkForm
                        onSubmit={this.onFormSubmit}
                        topic={this.state.topic}
                        title={this.state.title}
                        url={this.state.url}
                        topics={this.props.topicsOpts}
                        onChangeInput={this.onChangeInput}
                        buttonName="CREATE"
                        isValidating={this.state.isValidating}
                        isLoading={this.state.isLoading}
                    />
                    <BlockList
                        topics={this.props.topicsOpts}
                        links={this.props.links}
                        isLoading={this.state.isLoading}
                        onDelete={this.onDelete}
                    />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        topics: state.links.topics,
        links: state.links.links,
        topicsOpts: state.topics.topics,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (topic, title, url) => dispatch(addLink(topic, title, url)),
        listTopics: () => dispatch(listTopics()),
        listLinks: () => dispatch(listLinks()),
        delete: id => dispatch(deleteLink(id)),
        setUser: user => dispatch(setUser(user)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)
