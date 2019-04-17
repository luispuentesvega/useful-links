import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTopic, listTopics, deleteTopic } from '../store/topics/actions'
import TopicForm from '../components/TopicBlock/TopicForm'
import TopicList from '../components/TopicBlock/TopicList'
import { success, error } from '../utils/utils'

class Topics extends Component {
    state = {
        name: '',
        isValidating: false,
        isLoading: false,
    }

    hideLoader = () => {
        this.setState({ isLoading: false })
    }

    showLoader = () => {
        this.setState({ isLoading: true })
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
                    isValidating: false,
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
        this.setState({ isValidating: true })
        return this.state.name.trim() !== ''
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
                error(err)
            })
    }

    render() {
        const { topics } = this.props
        const { name, isValidating } = this.state

        return (
            <div className="container">
                <TopicForm
                    onSubmit={this.onFormSubmit}
                    name={name}
                    onChangeNameInput={this.onChangeNameInput}
                    buttonName="CREATE"
                    isValidating={isValidating}
                />
                <TopicList
                    topics={topics}
                    onDelete={this.onDelete}
                    isLoading={this.state.isLoading}
                />
            </div>
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
