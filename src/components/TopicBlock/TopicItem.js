import React from 'react';
import editIcon from '../../assets/images/edit.png';
import removeIcon from '../../assets/images/remove.png';


const TopicItem = (props) => {
    return (
        <p key={props.id} className="topic">
            <span className="topic__title">
                { props.name }
            </span>
            <span className="topic__icons">
                <img src={editIcon} alt="edit" />
                <img src={removeIcon} alt="remove" />
            </span>
        </p>
    );
};

export default TopicItem;