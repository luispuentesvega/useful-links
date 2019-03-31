// External import
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'

// CSS import 
import 'normalize.css/normalize.css'
import './styles/styles.scss'

// Internal import 
import store from './store/Store';

const App = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));