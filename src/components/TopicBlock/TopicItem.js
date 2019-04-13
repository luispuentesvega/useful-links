import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import editIcon from '../../assets/images/edit.png'
import removeIcon from '../../assets/images/remove.png'
import { confirmAlert } from 'react-confirm-alert'

const TopicItem = props => {
    const deleteTopic = () => {
        confirmAlert({
            title: 'Confirm to delete',
            message: `Are you sure that you want to delete ${props.name} ?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.onDelete(props.id),
                },
                {
                    label: 'No',
                    onClick: () => {},
                },
            ],
        })
    }

    return (
        <p key={props.id} className="topic">
            <span className="topic__title">{props.name}</span>
            <span className="topic__icons">
                <Link to={'/topics/' + props.id}>
                    <img src={editIcon} alt="edit" />
                </Link>
                <img
                    src={removeIcon}
                    onClick={() => deleteTopic()}
                    alt="remove"
                />
            </span>
        </p>
    )
}

TopicItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default TopicItem
