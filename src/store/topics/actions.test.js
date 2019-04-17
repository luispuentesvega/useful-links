import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from './constants'
import * as actions from './actions'
import nock from 'nock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const LIST_API = 'https://react-links-1df04.firebaseio.com/v2/'

const getMockTopicList = () => {
    return JSON.parse('{"-LbgG2V1S0fBxqp7JMMj":{"name":"PHP"}}')
}

describe('topics > actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    beforeEach(() => {
        nock(LIST_API)
            .defaultReplyHeaders({
                'content-type': 'application/json',
            })
            .get('/topics.json')
            .reply(200, response)
    })

    const response = getMockTopicList()

    it('listTopics()', () => {
        const expectedActions = [
            {
                type: types.LIST_TOPICS,
                data: [
                    {
                        id: '-LbgG2V1S0fBxqp7JMMj',
                        name: 'PHP',
                    },
                ],
            },
        ]
        let state = { topics: [] }
        const store = mockStore(() => state)

        return store.dispatch(actions.listTopics()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('deleteTopic()', () => {
        const response = JSON.parse('{"-LbgG2V1S0fBxqp7JMMj":{"name":"PHP"}}')
        const id = '-LbgG2V1S0fBxqp7JMMj'

        nock(LIST_API)
            .delete(`/topics/${id}.json`)
            .reply(200, response)

        const expectedActions = [
            {
                type: types.LIST_TOPICS,
                data: [
                    {
                        id: '-LbgG2V1S0fBxqp7JMMj',
                        name: 'PHP',
                    },
                ],
            },
        ]
        const store = mockStore({ topics: [] })

        return store.dispatch(actions.deleteTopic(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
