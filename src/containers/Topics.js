import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import uuidv1 from 'uuid';
import { addTopic, editTopic, listTopics } from "../store/topics/actions";
import TopicForm from '../components/TopicBlock/TopicForm';
import TopicList from '../components/TopicBlock/TopicList';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class Topics extends Component {
    state = {
        name: '',
        show: false,
        error: ''
    };

    onFormSubmit = e => {
        e.preventDefault();
        if (!this.isValidTheForm()) {
            return;
        }
        this.props.add(this.state.name, uuidv1());
    }

    isValidTheForm = () => {
        if (!this.state.name) {
            this.setState({ show: true, error:'Must fill up the Name' });
            return false;
        }
        return true;
    }

    onChangeNameInput = e => {
        this.setState({ name: e.target.value});
    }

    componentDidMount() {
        this.props.list();
    }

    onEdit = (id) => {
        this.props.edit(id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ name : (this.props.current ? this.props.current.name : '') })
    }

    render() {
        return (
            <Fragment>
                <SweetAlert
                    show={this.state.show}
                    title="Error"
                    text={this.state.error}
                    onConfirm={() => this.setState({ show: false })}
                />;
                <TopicForm
                    onSubmit={this.onFormSubmit}
                    name={this.state.name}
                    onChangeNameInput={this.onChangeNameInput}
                    buttonName="CREATE"/>
                {  <TopicList
                    topics={this.props.topics}
                    onEdit={this.onEdit}/>
                }
            </Fragment>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topics.topics,
        current: state.topics.current,
     }
};

const mapDispatchToProps = dispatch => {
    return {
        add: (name, id) => dispatch(addTopic(name, id)),
        list: () => dispatch(listTopics()),
        edit: (id) => dispatch(editTopic(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);