import { combineReducers } from 'redux'
import LinkReducer from './links/reducers'
import TopicReducer from './topics/reducers'

const rootReducer = combineReducers({
    topics: TopicReducer,
    links: LinkReducer,
})

export default rootReducer
