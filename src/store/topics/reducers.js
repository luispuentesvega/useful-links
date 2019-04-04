const defaultState = {
        topics: [],
        currrent: {
            name: ''
        }
    };

const TopicReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TOPIC':
            return [...state, {
                name: action.data.name
            }];
        case 'LIST_TOPICS':
            return {
                ...state,
                topics: action.data
            };
        case 'EDIT_TOPIC_SUCCESS':
            return {
                ...state,
                current: action.data
            };
        default:
            return state;
    }
};

export default TopicReducer;