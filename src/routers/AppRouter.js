import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import { browserHistory } from 'react-router'
import Home from './../containers/Home'
import Topics from './../containers/Topics'
import TopicEdit from './../containers/TopicEdit'
import LinkEdit from '../containers/LinkEdit'
import About from './../containers/About'
import Login from './../containers/Login'
import Register from '../containers/Register'
import NotFoundPage from './../components/NotFoundPage'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AppRouter = () => {
    return (
        <HashRouter basename="/">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/topics/" component={Topics} />
                <Route path="/topics/:id" component={TopicEdit} />
                <Route path="/link/:id" component={LinkEdit} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route component={NotFoundPage} />
            </Switch>
            <ToastContainer />
        </HashRouter>
    )
}

export default AppRouter
