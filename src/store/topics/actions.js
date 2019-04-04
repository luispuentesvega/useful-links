import * as actionTypes from './constants';
import axios from '../../axios-links';

export const addTopic = (name, id) => {
    return dispatch => {
        axios.post('topics.json', {
            name: name
        })
        .then(res => {
            dispatch(listTopics());
        })
        .catch(err => {
            console.log('Errr:::', err);
        });
    };
};

export const addTopicSuccess = (name) => {
    return {
        type: actionTypes.ADD_TOPIC_SUCCESS,
        data: {
            name
        }
    }
};

export const addTopicFailure = (error) => {
    return {
        type: actionTypes.ADD_TOPIC_FAILURE,
        error
    }
};

export const listTopics = () => {
    return dispatch => {
        axios.get('topics.json')
            .then(res => {
                let topics = [];
                Object.keys(res.data).map(idx => {
                    topics.push({
                        id: idx,
                        name:res.data[idx].name
                    })
                });
                dispatch(listTopicSuccess(topics));
            })
            .catch(err => {
                console.log('ERROR: ',err);
            });
    }
};

export const listTopicSuccess = (list) => {
    return {
        type: actionTypes.LIST_TOPICS,
        data: list
    }
};

export const editTopic = (id) => {
    return dispatch => {
        axios.get(`topics/`+id+`.json`)
            .then(res => {
                dispatch(editTopicSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export const editTopicSuccess = (topic) => {
    return {
        type: actionTypes.EDIT_TOPIC_SUCCESS,
        data: topic
    }
}