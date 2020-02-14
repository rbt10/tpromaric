import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token') ? (
        <Component {...props}></Component>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        ></Redirect>
      )
    }
  ></Route>
)

export default PrivateRoute
