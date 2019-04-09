import React from 'react'

const Select = props => {
    return (
        <select
            className="select"
            value={props.default}
            onChange={props.onChange}
            name={props.name}
        >
            <option value="">..Please choose one topic..</option>
            {props.options.map((option, index) => {
                return (
                    <option key={index} value={option.id}>
                        {option.name}
                    </option>
                )
            })}
        </select>
    )
}

export default Select
