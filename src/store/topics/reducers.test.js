import reducer from './reducers'
import * as types from './constants'

const initalState = {
    topics: [],
    currrent: {
        name: '',
    },
    success: false,
}

describe('topics > reducers', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initalState)
    })

    it('should handle ADD_TOPIC', () => {
        const expectedState = {
            topics: [
                {
                    name: 'PHP',
                },
            ],
            currrent: {
                name: '',
            },
            success: false,
        }
        expect(
            reducer(initalState, {
                type: types.ADD_TOPIC,
                data: {
                    name: 'PHP',
                },
            }),
        ).toEqual(expectedState)
    })
})
