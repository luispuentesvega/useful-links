import React, { Component, Fragment } from 'react'
import LinkForm from '../components/ChildBlock/LinkForm'
import Button from '../components/UI/Buttons/Button'
import { connect } from 'react-redux'
import { success, error } from '../utils/utils'
import { editLink, updateLink } from '../store/links/actions'
import { listTopics } from '../store/topics/actions'
import * as util from '../utils/utils'

const divStyle = {
    width: '100%',
    textAlign: 'center',
}

class LinkEdit extends Component {
    state = {
        loading: false,
        validating: false,
        url: '',
        title: '',
        topic: '',
    }

    onFormSubmit = e => {
        e.preventDefault()
        if (!this.isValidTheForm()) {
            return
        }

        this.props
            .update(
                this.state.id,
                this.state.topic,
                this.state.title,
                this.state.url,
            )
            .then(res => {
                success('Updated successfully! :)')
                this.redirect()
            })
            .catch(err => {
                error()
                console.log('err:', err)
            })
    }

    redirect = () => {
        this.props.history.push('/')
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
            error('Opssss, the url is incorrect!')
            return false
        }

        return true
    }

    componentDidMount() {
        const id = this.props.match.params.id

        this.props
            .listTopics()
            .then(() => {})
            .catch(err => {
                console.log('err:', err)
            })

        this.props
            .edit(id)
            .then(() => {
                this.setState({
                    id: id,
                    topic: this.props.current.topic,
                    title: this.props.current.title,
                    url: this.props.current.url,
                })
            })
            .catch(() => {
                error()
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
                    buttonName="EDIT"
                    validating={this.state.validating}
                    loading={this.state.loading}
                />
                <div style={divStyle}>
                    <Button
                        buttonName="GO BACK"
                        className="btn btn--goBack"
                        type="button"
                        onClick={this.redirect}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        current: state.links.current,
        success: state.links.success,
        topicsOpts: state.topics.topics,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        edit: id => dispatch(editLink(id)),
        listTopics: () => dispatch(listTopics()),
        update: (id, topic, title, url) =>
            dispatch(updateLink(id, topic, title, url)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LinkEdit)
