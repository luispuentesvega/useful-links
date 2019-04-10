const defaultState = {
    user: null,
}

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.data,
            }

        default:
            return state
    }
}

export default UserReducer
