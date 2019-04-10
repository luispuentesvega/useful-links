import * as actionTypes from './constants'

export const setUser = user => {
    return {
        type: actionTypes.SET_USER,
        data: user,
    }
}
