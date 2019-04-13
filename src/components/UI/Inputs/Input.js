import React from 'react'
import PropTypes from 'prop-types'

const Input = props => {
    return (
        <React.Fragment>
            <input
                className="input"
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                {...props}
            />
        </React.Fragment>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
}

export default Input
