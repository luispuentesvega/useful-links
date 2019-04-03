import React from 'react';

const TopicItem = (props) => {
    return (
        <p key={props.id} className="topic">
            <span className="topic__title">
                { props.name }
            </span>
            <span className="topic__icons">
                <img src="/img/edit.png" alt="edit" />
                <img src="/img/remove.png" alt="remove" />
            </span>
        </p>
    );
};

export default TopicItem;