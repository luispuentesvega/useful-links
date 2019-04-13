import React, { Component, Fragment } from 'react'
import TopicForm from '../components/TopicBlock/TopicForm'
import Button from '../components/UI/Buttons/Button'
import { connect } from 'react-redux'
import { success, error } from '../utils/utils'
import { editTopic, updateTopic } from '../store/topics/actions'

const divStyle = {
    width: '100%',
    textAlign: 'center',
}

class TopicEdit extends Component {
    state = {
        id: '',
        name: '',
        validating: false,
    }

    onFormSubmit = e => {
        e.preventDefault()
        if (!this.isValidTheForm()) {
            return
        }

        this.props
            .update(this.state.id, this.state.name)
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
        this.props.history.push('/topics')
    }

    onChangeNameInput = e => {
        this.setState({ name: e.target.value })
    }

    isValidTheForm = () => {
        this.setState({ validating: true })
        return this.state.name
    }

    componentDidMount() {
        const id = this.props.match.params.id

        this.props
            .edit(id)
            .then(() => {
                this.setState({
                    id: id,
                    name: this.props.current.name,
                })
            })
            .catch(() => {
                error()
            })
    }

    render() {
        const { name, validating } = this.state

        return (
            <div className="container">
                <TopicForm
                    onSubmit={this.onFormSubmit}
                    name={name}
                    onChangeNameInput={this.onChangeNameInput}
                    buttonName="EDIT"
                    validating={validating}
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
        current: state.topics.current,
        success: state.topics.success,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        edit: id => dispatch(editTopic(id)),
        update: (id, name) => dispatch(updateTopic(id, name)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopicEdit)
