import React, { Fragment } from 'react'
import editIcon from '../../assets/images/edit.png'
import removeIcon from '../../assets/images/remove.png'
import { confirmAlert } from 'react-confirm-alert'
import { Link } from 'react-router-dom'

const TopicItem = props => {
    const deleteTopic = (id, title) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: `Are you sure that you want to delete ${title} ?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.onDelete(id),
                },
                {
                    label: 'No',
                    onClick: () => {},
                },
            ],
        })
    }
    const TopicLinks = () => {
        let out = []
        props.links.map(link => {
            out.push(
                <p key={link.title} className="link">
                    <span className="link__title">
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.title}
                        </a>
                    </span>
                    <span className="link__icons">
                        <Link to={'/link/' + link.id}>
                            <img src={editIcon} alt="edit" />
                        </Link>
                        <img
                            src={removeIcon}
                            onClick={() => deleteTopic(link.id, link.title)}
                            alt="remove"
                        />
                    </span>
                </p>,
            )
        })
        return out
    }

    const links = TopicLinks()

    return (
        <Fragment>
            {links.length > 0 ? (
                <div className="child">
                    <h1 className="child__title">{props.topic.name}</h1>
                    <div className="caption">{links}</div>
                </div>
            ) : null}
        </Fragment>
    )
}

export default TopicItem
