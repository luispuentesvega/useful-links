import React from 'react'
import PropTypes from 'prop-types'

const Notification = props => {
    return <div className={props.type}>{props.children}</div>
}

Notification.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
}

Notification.defaultProps = {
    type: 'notification',
}

export default Notification
