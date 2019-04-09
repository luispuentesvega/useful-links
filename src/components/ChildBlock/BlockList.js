import React, { Fragment } from 'react'

import TopicItem from './TopicItem'
import Spinner from '../UI/Spinner/Spinner'

const BlockList = props => {
    return (
        <Fragment>
            {props.loading ? (
                <Spinner />
            ) : (
                props.topics.map((topic, index) => {
                    const topicLinks = props.links.filter(
                        link => link.topic === topic.id,
                    )
                    return (
                        <TopicItem
                            key={index}
                            topic={topic}
                            links={topicLinks}
                            onDelete={props.onDelete}
                        />
                    )
                })
            )}
        </Fragment>
    )
}

export default BlockList
