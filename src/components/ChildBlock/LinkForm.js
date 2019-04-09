import React from 'react'
import Input from '../UI/Inputs/Input'
import Button from '../UI/Buttons/Button'
import Select from '../UI/Selects/Select'
import Spinner from '../UI/Spinner/Spinner'
import InputError from '../UI/InputError/InputError'

const LinkForm = props => {
    return (
        <div className="child">
            {props.loading ? (
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
                        validating={props.validating}
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
                        validating={props.validating}
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
                    <InputError validating={props.validating} value={props.url} type="url">
                        Must fill up the URL or it is incorrect, must include http
                    </InputError>

                    <Button buttonName={props.buttonName} type="submit" />
                </form>
            )}
        </div>
    )
}

export default LinkForm
