import React, { Component, Fragment } from 'react';
import TopicForm from "../components/TopicBlock/TopicForm";
import axios from '../axios-links';
import Button from '../components/UI/Buttons/Button';
import {connect} from "react-redux";

const divStyle = {
    width: '100%',
    textAlign: 'center'
};

class TopicEdit extends Component {

    state = {
        id: '',
        name: ''
    }

    onFormSubmit = e => {
        e.preventDefault();
        if (!this.isValidTheForm()) {
            return;
        }

        axios.put(`topics/${this.state.id}.json`, {
            name: this.state.name
        }).then(res => {
            this.redirect();
        })
        .catch(err => {
            console.log('err:', err);
        });
    }

    redirect = () => {
        this.props.history.push("/topics");
    }

    onChangeNameInput = e => {
        this.setState({ name: e.target.value });
    }

    isValidTheForm = () => {
        if (!this.state.name) {
            alert('Must fill up the Name!');
            return false;
        }
        return true;
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`topics/${id}.json`)
        .then(res => {
            this.setState({
                id: this.props.match.params.id,
                name: res.data.name
            });
        })
        .catch(err => {
            console.log('err:::',err);
        })
    }

    render() {
        return (
            <Fragment>
                <TopicForm
                    onSubmit={this.onFormSubmit}
                    name={this.state.name}
                    onChangeNameInput={this.onChangeNameInput}
                    buttonName="EDIT"/>
                    <div style={divStyle}>
                        <Button buttonName='GO BACK' className="btn btn--goBack" type="button" onClick={this.redirect}/>
                    </div>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {

}

export default connect(null, mapDispatchToProps)(TopicEdit);