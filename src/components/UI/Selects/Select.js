import React from 'react'
import PropTypes from 'prop-types'

const Select = props => {
    return (
        <select
            className="select"
            value={props.default}
            onChange={props.onChange}
            name={props.name}
        >
            <option value="">..Please choose one topic..</option>
            {props.options &&
                props.options.map((option, index) => {
                    return (
                        <option key={index} value={option.id}>
                            {option.name}
                        </option>
                    )
                })}
        </select>
    )
}

Select.propTypes = {
    default: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array,
}

export default Select
