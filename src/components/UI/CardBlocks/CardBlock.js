import React from 'react'


const CardBlock = (props) => {

    const contents = props.contents.map((content, index) => {
        return (
            <p className="link" key={index}>
                <span className="link__title">
                    {content}
                </span>
                <span className="link__icons">
                    <img src={props.firstSource} alt="edit" />
                    <img src={props.secondSource} alt="remove" />
                </span>
            </p>
        )
    })

    return (
        <div className="child">
            <h1 className="child__title">{props.title}</h1>
            <div className="caption">
                {contents}
            </div>
        </div>
    )
}

export default CardBlock