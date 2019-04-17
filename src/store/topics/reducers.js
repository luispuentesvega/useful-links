const defaultState = {
    topics: [],
    currrent: {
        name: '',
    },
    success: false,
}

const TopicReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TOPIC':
            return {
                ...state,
                topics: state.topics.concat({
                    name: action.data.name,
                }),
            }
        case 'LIST_TOPICS':
            return {
                ...state,
                topics: action.data,
            }
        case 'EDIT_TOPIC_SUCCESS':
            return {
                ...state,
                current: action.data,
            }
        case 'ADD_TOPIC_SUCCESS':
            return {
                ...state,
                success: true,
            }
        case 'UPDATE_TOPIC_SUCCESS':
            return {
                ...state,
                success: true,
            }
        default:
            return state
    }
}

export default TopicReducer
