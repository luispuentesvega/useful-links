import React from 'react'
import TopicItem from './TopicItem'
import Spinner from '../../components/UI/Spinner/Spinner'

const TopicList = props => {
    return (
        <div className="child">
            <h1 className="child__title">LIST</h1>
            <div className="caption">
                {props.loading ? (
                    <Spinner />
                ) : (
                    Object.values(props.topics).map((topic, idx) => {
                        return (
                            <TopicItem
                                key={idx}
                                id={topic.id}
                                name={topic.name}
                                onDelete={props.onDelete}
                            />
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default TopicList
