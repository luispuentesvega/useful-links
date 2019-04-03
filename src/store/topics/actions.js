import * as actionTypes from './constants';
import axios from '../../axios-links';

export const addTopic = (name, id) => {
    return dispatch => {
        axios.post('links.json', {
            name: name,
            id: id
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
        axios.get('links.json')
            .then(res => {
                let topics = [];
                Object.keys(res.data).map(idx => topics.push(res.data[idx]));
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