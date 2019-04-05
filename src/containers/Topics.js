import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addTopic, listTopics, deleteTopic } from '../store/topics/actions'
import TopicForm from '../components/TopicBlock/TopicForm'
import TopicList from '../components/TopicBlock/TopicList'
import { success, error } from '../utils/utils'

class Topics extends Component {
    state = {
        name: '',
        validating: false,
        loading: false,
    }

    hideLoader = () => {
        this.setState({ loading: false })
    }

    showLoader = () => {
        this.setState({ loading: true })
    }

    onFormSubmit = e => {
        e.preventDefault()
        if (!this.isValidTheForm()) {
            return false
        }
        this.props
            .add(this.state.name)
            .then(() => {
                this.setState({
                    validating: false,
                    name: '',
                })
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

    isValidTheForm = () => {
        this.setState({ validating: true })
        return this.state.name
    }

    onChangeNameInput = e => {
        this.setState({
            name: e.target.value,
        })
    }

    componentDidMount() {
        this.showLoader()
        const _this = this

        this.props
            .list()
            .then(() => {
                _this.hideLoader()
            })
            .catch(err => {
                _this.hideLoader()
                console.log('err:', err)
            })
    }

    render() {
        const { topics } = this.props
        const { name, validating } = this.state

        return (
            <Fragment>
                <TopicForm
                    onSubmit={this.onFormSubmit}
                    name={name}
                    onChangeNameInput={this.onChangeNameInput}
                    buttonName="CREATE"
                    validating={validating}
                />
                <TopicList
                    topics={topics}
                    onDelete={this.onDelete}
                    loading={this.state.loading}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        topics: state.topics.topics,
        success: state.topics.success,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: name => dispatch(addTopic(name)),
        list: () => dispatch(listTopics()),
        delete: id => dispatch(deleteTopic(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Topics)
