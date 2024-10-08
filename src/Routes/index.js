import React from 'react'
import Home from '../Module/Home'
import Form from '../Module/Authorization'
import { Navigate, Route, Routes as Router } from 'react-router-dom'
import CreatePost from '../Module/CreatePost'
import UpdatePage from '../Module/UpdatePage'
import NotFoundPage from '../Module/NotFoundPage'

const PrivateRoute = ({ children }) => {
    const isUserLoggedIn = window.localStorage.getItem('user:token') || false
    const isFormPages = window.location.pathname.includes('account')

    if (isUserLoggedIn && !isFormPages) {
        return children
    } else if (!isUserLoggedIn && isFormPages) {
        return children
    } else {
        const redirectUrl = isUserLoggedIn ? '/' : '/account/signin'
        return <Navigate to={redirectUrl} replace />
    }
}
const Routes = () => {
    const routes = [
        {
            id: 1,
            name: 'home',
            path: '/',
            component: <Home />
        },
        {
            id: 2,
            name: "sign in",
            path: "/account/signin",
            component: <Form />
        },
        {
            id: 3,
            name: "signup",
            path: "/account/signup",
            component: <Form />
        },
        {
            id: 4,
            name: "create post",
            path: "/new-post",
            component: <CreatePost />
        },
        {
            id: 5,
            name: "update page",
            path: "/update-page",
            component: <UpdatePage />
        },
    ]
    return (
        <Router>
            {routes.map(({ id, name, path, component }) => (
                <Route key={id} path={path} element={<PrivateRoute>{component}</PrivateRoute>} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
        </Router>
    )
}

export default Routes