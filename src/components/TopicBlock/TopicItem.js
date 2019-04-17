import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import editIcon from '../../assets/images/edit.png'
import removeIcon from '../../assets/images/remove.png'
import { confirmAlert } from 'react-confirm-alert'

const TopicItem = ({ id, name, onDelete }) => {
    const deleteTopic = () => {
        confirmAlert({
            title: 'Confirm to delete',
            message: `Are you sure that you want to delete ${name} ?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => onDelete(id),
                },
                {
                    label: 'No',
                    onClick: () => {},
                },
            ],
        })
    }

    return (
        <p key={id} className="topic">
            <span className="topic__title">{name}</span>
            <span className="topic__icons">
                <Link to={'/topics/' + id}>
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
    onDelete: PropTypes.func.isRequired,
}

export default TopicItem
