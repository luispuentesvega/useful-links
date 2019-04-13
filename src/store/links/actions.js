import * as actionTypes from './constants'
import axios from '../../axios-links'

export const addLink = (topic, title, url) => {
    return dispatch => {
        return new Promise(function(resolve, reject) {
            axios
                .post('links.json', {
                    topic: topic,
                    title: title,
                    url: url,
                })
                .then(() => {
                    dispatch(addLinkSuccess())
                    resolve()
                })
                .catch(err => {
                    console.log('err:', err)
                    reject()
                })
        })
    }
}

export const addLinkSuccess = () => {
    return {
        type: actionTypes.ADD_LINK_SUCCESS,
    }
}

export const listLinks = () => {
    return dispatch => {
        return new Promise(function(resolve, reject) {
            axios
                .get('links.json')
                .then(res => {
                    let links = []
                    if (res.data != null) {
                        Object.keys(res.data).map(idx =>
                            links.push({
                                id: idx,
                                topic: res.data[idx].topic,
                                title: res.data[idx].title,
                                url: res.data[idx].url,
                            }),
                        )
                    }
                    dispatch(listLinksSuccess(links))
                    resolve()
                })
                .catch(err => {
                    reject()
                    console.log('err:', err)
                })
        })
    }
}

export const listLinksSuccess = list => {
    return {
        type: actionTypes.LIST_LINKS_SUCCESS,
        data: list,
    }
}

export const deleteLink = id => {
    return dispatch => {
        return new Promise(function(resolve, reject) {
            axios
                .delete(`links/${id}.json`)
                .then(() => {
                    dispatch(listLinks())
                    resolve()
                })
                .catch(err => {
                    console.log('err:', err)
                    reject()
                })
        })
    }
}

export const editLink = id => {
    return dispatch => {
        return new Promise(function(resolve, reject) {
            axios
                .get(`links/` + id + `.json`)
                .then(res => {
                    dispatch(editLinkSuccess(res.data))
                    resolve()
                })
                .catch(err => {
                    console.log('err:', err)
                    reject()
                })
        })
    }
}

export const editLinkSuccess = link => {
    return {
        type: actionTypes.EDIT_LINK_SUCCESS,
        data: link,
    }
}

export const updateLink = (id, topic, title, url) => {
    return dispatch => {
        return new Promise(function(resolve, reject) {
            axios
                .put(`links/${id}.json`, {
                    topic: topic,
                    title: title,
                    url: url,
                })
                .then(() => {
                    dispatch(updateLinkSuccess())
                    dispatch(listLinks())
                    resolve()
                })
                .catch(err => {
                    console.log('err:', err)
                    reject()
                })
        })
    }
}

export const updateLinkSuccess = () => {
    return {
        type: actionTypes.UPDATE_LINK_SUCCESS,
    }
}
