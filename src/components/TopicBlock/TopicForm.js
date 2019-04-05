import React from 'react'
import Input from '../UI/Inputs/Input'
import Button from '../UI/Buttons/Button'

const TopicForm = props => {
    return (
        <div className="child">
            <form onSubmit={props.onSubmit}>
                <h1>Topics</h1>
                <Input
                    type="text"
                    placeholder="Name"
                    value={props.name}
                    onChange={props.onChangeNameInput}
                />
                {props.validating && props.name === '' ? (
                    <div className="error">Must fill up the name</div>
                ) : null}
                <Button buttonName={props.buttonName} type="submit" />
            </form>
        </div>
    )
}

export default TopicForm
