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

    const response = getMockTopicList()

    nock(LIST_API)
        .defaultReplyHeaders({
            'content-type': 'application/json',
        })
        .get('/topics.json')
        .reply(200, response)

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
        const store = mockStore({ topics: [] })

        return store.dispatch(actions.listTopics()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
