import { combineReducers } from 'redux'
import LinkReducer from './links/reducers'
import TopicReducer from './topics/reducers'
import UserReducer from './user/reducers'

const rootReducer = combineReducers({
    topics: TopicReducer,
    links: LinkReducer,
    user: UserReducer,
})

export default rootReducer
