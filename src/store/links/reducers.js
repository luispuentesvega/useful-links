const defaultState = {
    topics: [],
    currrent: {
        topic: '',
        title: '',
        url: '',
    },
    success: false,
}

const LinkReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LIST_LINKS_SUCCESS':
            return {
                ...state,
                links: action.data,
            }
        case 'EDIT_LINK_SUCCESS':
            return {
                ...state,
                current: action.data,
            }
        case 'UPDATE_LINK_SUCCESS':
            return {
                ...state,
                success: true,
            }
        default:
            return state
    }
}

export default LinkReducer
