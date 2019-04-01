import React from 'react'
import { connect } from 'react-redux'

import CardBlock from '../../UI/CardBlocks/CardBlock'


const TopicItem = (props) => {

    const title = "Topic"
    const firstSource = "/img/edit.png"
    const secondSource = "/img/remove.png"
    const contents = props.topicsName

    return (
        <CardBlock title={title} contents={contents} firstSource={firstSource} secondSource={secondSource} />
    )
}

const mapStateToProps = state => {
    return {
        topicsName: state.languages.map(languageObj => {
            return languageObj.languageName
        })
    }
}

export default connect(mapStateToProps)(TopicItem)
