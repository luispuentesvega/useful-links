import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './containers/Home';
import Topics from './containers/Topics';
import About from './containers/About';
import Login from './containers/Login';

ReactDOM.render( <Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
    </div>
</Router>, document.querySelector('#root'));