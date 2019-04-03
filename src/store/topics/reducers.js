const defaultState = [];

const TopicReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TOPIC':
            return [...state, action.data.name];
        case 'LIST_TOPICS':
            return {
                ...action.data
            };
        default:
            return state;
    }
};

export default TopicReducer;