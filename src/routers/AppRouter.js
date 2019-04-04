import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './../containers/Home'
import Topics from './../containers/Topics'
import TopicEdit from './../containers/TopicEdit'
import About from './../containers/About'
import Login from './../containers/Login'
import NotFoundPage from './../components/NotFoundPage'
import Header from '../components/Header';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/topics/" component={Topics} />
                <Route path="/topics/:id" component={TopicEdit} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter