import React, { Component } from 'react'
import { connect } from 'react-redux'
import BlockList from './../components/ChildBlock/BlockList'
import { success, error } from '../utils/utils'
import LinkForm from '../components/ChildBlock/LinkForm'
import { listTopics } from '../store/topics/actions'
import { addLink, deleteLink, listLinks } from '../store/links/actions'
import * as util from '../utils/utils'
import fire from '../config/fire'
import { setUser } from '../store/user/actions'

class Home extends Component {
    state = {
        loading: true,
        validating: false,
        url: '',
        title: '',
        topic: '',
        user: null,
    }

    hideLoader = () => {
        this.setState({ loading: false })
    }

    showLoader = () => {
        this.setState({ loading: true })
    }

    onChangeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    isValidTheForm = () => {
        this.setState({ validating: true })
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
                    validating: false,
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
        this.setState({ loading: true })
        this.props
            .listTopics()
            .then(() => {})
            .catch(err => {
                console.log('err:', err)
            })

        this.props
            .listLinks()
            .then(() => {
                this.setState({ loading: false })
            })
            .catch(err => {
                console.log('err:', err)
            })

        this.authListener()
    }

    authListener() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                localStorage.setItem('user', user.email)
                this.props.setUser(user.email)
            } else {
                this.setState({ user: null })
                localStorage.removeItem('user')
            }
        })
    }

    render() {
        return (
            <div className="container">
                <LinkForm
                    onSubmit={this.onFormSubmit}
                    topic={this.state.topic}
                    title={this.state.title}
                    url={this.state.url}
                    topics={this.props.topicsOpts}
                    onChangeInput={this.onChangeInput}
                    buttonName="CREATE"
                    validating={this.state.validating}
                    loading={this.state.loading}
                />
                <BlockList
                    topics={this.props.topicsOpts}
                    links={this.props.links}
                    loading={this.state.loading}
                    onDelete={this.onDelete}
                />
            </div>
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
