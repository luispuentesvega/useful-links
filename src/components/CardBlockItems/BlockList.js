import React from 'react'
import { connect } from 'react-redux'

import HomeFormItem from '../CardBlockItems/home/HomeFormItem'
import LanguageItem from './LanguageCardItem'

const BlockList = (props) => {
    return (
        <div className="container">
            <HomeFormItem />
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