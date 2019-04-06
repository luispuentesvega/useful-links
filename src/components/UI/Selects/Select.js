import React from 'react'

const Select = props => {
    return (
        <select
            className="select"
            defaultValue="have-to-select"
            onChange={props.onChange}
        >
            <option value="have-to-select">..Please choose one topic..</option>
            {props.options.map((option, index) => {
                return (
                    <option key={index} value={option}>
                        {option}
                    </option>
                )
            })}
        </select>
    )
}

export default Select
