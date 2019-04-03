import React from 'react';
import TopicItem from './TopicItem';

const TopicList = (props) => {
    return (
        <div className="child">
            <h1 className="child__title">LIST</h1>
            <div className="caption">
                { Object.values(props.topics).map((topic, idx) => {
                    return (
                        <TopicItem
                            key={idx}
                            id={topic.id}
                            name={topic.name}
                        />
                    );
                }) }
            </div>
        </div>
    );
};

export default TopicList;