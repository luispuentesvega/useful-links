import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
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
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Switch>
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/`}
                    component={Home}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/topics/`}
                    component={Topics}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/topics/:id`}
                    component={TopicEdit}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/link/:id`}
                    component={LinkEdit}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/about`}
                    component={About}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/login`}
                    component={Login}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/register`}
                    component={Register}
                />
                <Route component={NotFoundPage} />
            </Switch>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default AppRouter
