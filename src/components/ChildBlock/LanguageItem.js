import React from 'react'

const LanguageItem = (props) => {
    const createTitleandLink = () => {
        let titleAndLink = []
        const entry = Object.entries(props.languageObj.mappingTitleandLink)
        for (const [title, linkurl] of entry) {
            titleAndLink.push(
                <p key={title} className="link">
                    <span className="link__title">
                        <a href={linkurl} target="_blank" rel="noopener noreferrer">{title}</a>
                    </span>
                    <span className="link__icons">
                        <img src="/img/edit.png" alt="edit" />
                        <img src="/img/remove.png" alt="remove" />
                    </span>
                </p>
            )
        }
        
        return titleAndLink
    }

    return (
        <div className="child">
            <h1 className="child__title">{props.languageObj.languageName}</h1>
            <div className="caption">
                {createTitleandLink()}
            </div>
        </div>
    )
}

export default LanguageItem

// return 
