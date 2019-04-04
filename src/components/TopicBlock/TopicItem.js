import React from 'react';
import { Link } from 'react-router-dom';
import editIcon from '../../assets/images/edit.png';
import removeIcon from '../../assets/images/remove.png';


const TopicItem = (props) => {
    return (
        <p key={props.id} className="topic">
            <span className="topic__title">
                { props.name }
            </span>
            <span className="topic__icons">
                <Link to={"/topics/"+props.id}>
                    <img src={editIcon} alt="edit"/>
                </Link>
                <img src={removeIcon} alt="remove" />
            </span>
        </p>
    );
};

export default TopicItem;