import React from 'react'
import PropTypes from 'prop-types'
import Input from '../UI/Inputs/Input'
import Button from '../UI/Buttons/Button'
import Select from '../UI/Selects/Select'
import Spinner from '../UI/Spinner/Spinner'
import InputError from '../UI/InputError/InputError'

const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const LinkForm = props => {
    const ownStyle = props.isLoading ? loadingStyle : {}

    return (
        <div className="child" style={ownStyle}>
            {props.isLoading ? (
                <Spinner />
            ) : (
                <form onSubmit={props.onSubmit}>
                    <h1>Links</h1>
                    <Select
                        options={props.topics}
                        name="topic"
                        default={props.topic}
                        onChange={props.onChangeInput}
                    />
                    <InputError
                        isValidating={props.isValidating}
                        value={props.topic}
                    >
                        Must select one topic
                    </InputError>
                    <Input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={props.title}
                        onChange={props.onChangeInput}
                    />
                    <InputError
                        isValidating={props.isValidating}
                        value={props.title}
                    >
                        Must fill up the Title
                    </InputError>
                    <Input
                        type="text"
                        placeholder="Url"
                        name="url"
                        value={props.url}
                        onChange={props.onChangeInput}
                    />
                    <InputError
                        isValidating={props.isValidating}
                        value={props.url}
                        type="url"
                    >
                        Must fill up the URL or it is incorrect, must include
                        http
                    </InputError>

                    <Button buttonName={props.buttonName} type="submit" />
                </form>
            )}
        </div>
    )
}

const topicPropType = PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
})

LinkForm.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isValidating: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    topics: PropTypes.arrayOf(topicPropType),
    topic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
}

LinkForm.defaultProps = {
    isLoading: false,
    isValidating: false,
}

export default LinkForm
