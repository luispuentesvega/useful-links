import React from 'react'

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

export default Button
