import React from 'react'
import { connect } from 'react-redux'
import Input from './../../components/UI/Inputs/Input'
import Button from './../../components/UI/Buttons/Button'
import * as actions from '../../store/links/actions'

class TopicForm extends React.Component {

    state = {
        topicName: ''
    }

    onInputChangeTopicName = (e) => {
        this.setState({ topicName: e.target.value })
    }

    onFormSubmitAddTopicName = (e) => {
        e.preventDefault()
        this.props.addTopicNameRedux(this.state.topicName)
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmitAddTopicName}>
                <h1>Topics</h1>
                <Input type="text" placeholder="Name Of Topics" value={this.state.topicName} onChange={this.onInputChangeTopicName}/>
                <Button type="submit" buttonName="Add"/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTopicNameRedux: (topicName) => dispatch(actions.addTopic(topicName))
    }
}

export default connect(null, mapDispatchToProps)(TopicForm)