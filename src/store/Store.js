import { createStore, combineReducers } from 'redux'
import LinkReducer from './links/reducers'

const store = createStore(combineReducers({
    languages: LinkReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store