import React, { Fragment } from 'react'
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
            {props.validating && (props.value === '' || customValidation()) ? (
                <div className="error">{props.children}</div>
            ) : null}
        </Fragment>
    )
}

export default InputError
