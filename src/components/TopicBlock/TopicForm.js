import React from 'react'
import Input from '../UI/Inputs/Input'
import Button from '../UI/Buttons/Button'
import PropTypes from 'prop-types'

const TopicForm = ({
    onSubmit,
    name,
    onChangeNameInput,
    isValidating,
    buttonName,
}) => {
    return (
        <div className="child">
            <form onSubmit={onSubmit}>
                <h1>Topics</h1>
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={onChangeNameInput}
                />
                {isValidating && name === '' ? (
                    <div className="error">Must fill up the name</div>
                ) : null}
                <Button buttonName={buttonName} type="submit" />
            </form>
        </div>
    )
}

TopicForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    isValidating: PropTypes.bool.isRequired,
    buttonName: PropTypes.string.isRequired,
    onChangeNameInput: PropTypes.func.isRequired,
}

export default TopicForm
