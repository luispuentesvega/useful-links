import React, { Component } from 'react'
import TopicFormItem from './CardBlockItems/topics/TopicFormItem'
import TopicItem from './CardBlockItems/topics/TopicItem'

class Topics extends Component {

    render() {
        return (
        <div className="container">
            <TopicFormItem />
            <TopicItem />
        </div>
        )
    }
}

export default Topics;