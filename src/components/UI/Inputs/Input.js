import React from 'react'

const Input = (props) => {
    return (
        <React.Fragment>
            <input className="input" type={props.type} value={props.value} placeholder={props.placeholder} {...props}/>
        </React.Fragment>
    )
}

export default Input