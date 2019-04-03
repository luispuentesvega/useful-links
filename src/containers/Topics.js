import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import uuidv1 from 'uuid';
import { addTopic, listTopics } from "../store/topics/actions";
import TopicForm from '../components/TopicBlock/TopicForm';
import TopicList from '../components/TopicBlock/TopicList';

class Topics extends Component {

    state = {
        name: '',
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.add(this.state.name, uuidv1());
    }

    onChangeNameInput = e => {
        this.setState({ name: e.target.value});
    }

    componentDidMount() {
        this.props.list();
    }

    render() {
        return (
            <Fragment>
                <TopicForm
                    onSubmit={this.onFormSubmit}
                    name={this.state.name}
                    onChangeNameInput={this.onChangeNameInput}/>
                {  <TopicList
                    topics={this.props.topics}/>
                }
            </Fragment>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topics
     }
};

const mapDispatchToProps = dispatch => {
    return {
        add: (name, id) => dispatch(addTopic(name, id)),
        list: () => dispatch(listTopics())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);