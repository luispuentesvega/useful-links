import React from 'react';
import Input from '../UI/Inputs/Input';
import Button from '../UI/Buttons/Button';

const TopicForm = (props) => {
    return (
        <div className="child">
            <form onSubmit={props.onSubmit}>
                <h1>Topics</h1>
                <Input
                    type="text"
                    placeholder="Topic"
                    value={props.name}
                    onChange={props.onChangeNameInput}/>
                <Button buttonName={props.buttonName} type="submit"/>
            </form>
        </div>
    );
}

export default TopicForm;