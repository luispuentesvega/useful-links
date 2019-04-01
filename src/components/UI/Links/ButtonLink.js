import React from 'react'

const ButtonLink = (props) => {
    const { linkName, ...rest } = props
    return (
        <a rel="noopener noreferrer" className="btn" href={props.href} target="_blank" {...rest}>{linkName}</a>
    )
}

export default ButtonLink