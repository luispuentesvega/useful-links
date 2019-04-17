import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import * as util from '../../../utils/utils'

const InputError = props => {
    const customValidation = () => {
        if (props.hasOwnProperty('type') && props.type === 'url') {
            if (!util.isValidUrl.test(props.value)) {
                return true
            }
        }
        return false
    }

    return (
        <Fragment>
            {props.isValidating && (props.value === '' || customValidation()) ? (
                <div className="error">{props.children}</div>
            ) : null}
        </Fragment>
    )
}

InputError.propTypes = {
    isValidating: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default InputError
