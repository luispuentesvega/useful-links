import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './../components/Home';
import Header from './../components/Header';
import Topics from './../components/Topic';
import About from './../components/About';
import Login from './../components/Login';
import NotFoundPage from './../components/NotFoundPage';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/topics" component={Topics} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter