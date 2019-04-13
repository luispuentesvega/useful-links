import React, { Fragment } from 'react'
import Proptypes from 'prop-types'
import TopicItem from './TopicItem'
import Spinner from '../UI/Spinner/Spinner'

const BlockList = props => {
    return (
        <Fragment>
            {props.loading ? (
                <Spinner />
            ) : (
                props.links &&
                props.topics &&
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

BlockList.propTypes = {
    loading: Proptypes.bool.isRequired,
    topics: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.string.isRequired,
            name: Proptypes.string.isRequired,
        }),
    ),
    links: Proptypes.array,
    onDelete: Proptypes.func.isRequired,
}

export default BlockList
