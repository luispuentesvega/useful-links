import React from 'react'
import { connect } from 'react-redux'

import FormItem from './FormItem'
import LanguageItem from './LanguageItem'

const BlockList = (props) => {
    return (
        <div className="container">
            <FormItem />
            {props.languageObjs.map((languageObj, index) => {
                return <LanguageItem key={index} languageObj={languageObj} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        languageObjs: state.languages
    }
}

export default connect(mapStateToProps)(BlockList)