import * as actionTypes from './constants'
import axios from '../../axios-links'
import { getUrl } from '../../utils/utils'

export const addTopic = name => {
    return dispatch => {
        return new Promise(function(resolve, reject) {
            axios
                .post(getUrl() + 'topics.json', {
                    name: name,
                })
                .then(() => {
                    dispatch(addTopicSuccess())
                    dispatch(listTopics())
                    resolve()
                })
                .catch(err => {
                    console.log('err:', err)
                    reject()
                })
        })
    }
}

export const addTopicSuccess = () => {
    return {
        type: actionTypes.ADD_TOPIC_SUCCESS,
    }
}

export const addTopicError = error => {
    return {
        type: actionTypes.ADD_TOPIC_ERROR,
        error,
    }
}

export const listTopics = () => {
    return dispatch => {
        return new Promise(function(resolve, reject) {
            axios
                .get(getUrl() + 'topics.json')
                .then(res => {
                    let topics = []
                    if (res.data != null) {
                        Object.keys(res.data).map(idx => {
                            topics.push({
                                id: idx,
                                name: res.data[idx].name,
                            })
                        })
                    }
                    resolve(dispatch(listTopicSuccess(topics)))
                })
                .catch(err => {
                    reject()
                    console.log('err:', err)
                })
        })
    }
}

export const listTopicSuccess = list => {
    return {
        type: actionTypes.LIST_TOPICS,
        data: list,
    }
}

export const editTopic = id => {
    return dispatch => {
        return new Promise(function(resolve, reject) {
            axios
                .get(getUrl() + `topics/` + id + `.json`)
                .then(res => {
                    dispatch(editTopicSuccess(res.data))
                    resolve()
                })
                .catch(err => {
                    console.log('err:', err)
                    reject()
                })
        })
    }
}

export const editTopicSuccess = topic => {
    return {
        type: actionTypes.EDIT_TOPIC_SUCCESS,
        data: topic,
    }
}

export const deleteTopic = id => {
    return dispatch => {
        return new Promise(function(resolve, reject) {
            axios
                .delete(getUrl() + `topics/${id}.json`)
                .then(() => {
                    resolve(dispatch(listTopics()))
                })
                .catch(err => {
                    console.log('err:', err)
                    reject()
                })
        })
    }
}

export const updateTopic = (id, name) => {
    return dispatch => {
        return new Promise(function(resolve, reject) {
            axios
                .put(getUrl() + `topics/${id}.json`, {
                    name: name,
                })
                .then(() => {
                    dispatch(updateTopicSuccess())
                    dispatch(listTopics())
                    resolve()
                })
                .catch(err => {
                    console.log('err:', err)
                    reject()
                })
        })
    }
}

export const updateTopicSuccess = () => {
    return {
        type: actionTypes.UPDATE_TOPIC_SUCCESS,
    }
}
