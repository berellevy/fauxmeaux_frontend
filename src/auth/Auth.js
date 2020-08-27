import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const authToken = () => {
    return localStorage.getItem("token")
}

export const loggedIn = () => !!authToken()

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      loggedIn()
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )