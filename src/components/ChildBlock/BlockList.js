import React, { Fragment } from 'react'
import Proptypes from 'prop-types'
import TopicItem from './TopicItem'
import Spinner from '../UI/Spinner/Spinner'

const BlockList = ({ isLoading, links, topics, onDelete }) => {
    return (
        <Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                links &&
                topics &&
                topics.map((topic, index) => {
                    const topicLinks = links.filter(
                        link => link.topic === topic.id,
                    )
                    return (
                        <TopicItem
                            key={index}
                            topic={topic}
                            links={topicLinks}
                            onDelete={onDelete}
                        />
                    )
                })
            )}
        </Fragment>
    )
}

BlockList.propTypes = {
    isLoading: Proptypes.bool.isRequired,
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
