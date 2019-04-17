import React from 'react'
import PropTypes from 'prop-types'
import TopicItem from './TopicItem'
import Spinner from '../../components/UI/Spinner/Spinner'

const TopicList = ({ isLoading, topics, onDelete }) => {
    return (
        <div className="child">
            <h1 className="child__title">LIST</h1>
            <div className="caption">
                {isLoading ? (
                    <Spinner />
                ) : (
                    Object.values(topics).map((topic, idx) => {
                        return (
                            <TopicItem
                                key={idx}
                                id={topic.id}
                                name={topic.name}
                                onDelete={onDelete}
                            />
                        )
                    })
                )}
            </div>
        </div>
    )
}

const topicPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
})

TopicList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    topics: PropTypes.arrayOf(topicPropType),
    onDelete: PropTypes.func.isRequired,
}

export default TopicList
