import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const { buttonName, ...rest } = props
    return (
        <React.Fragment>
            <button className="btn" {...rest}>
                {buttonName}
            </button>
        </React.Fragment>
    )
}

Button.propTypes = {
    buttonName: PropTypes.string.isRequired,
}

export default Button
