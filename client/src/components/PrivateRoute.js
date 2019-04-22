import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const PrivateRoute = ({ component: Component, toggle = null, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('token')) {
          return <Component toggle={toggle} {...props} />
        } else {
          return <Redirect to='/' />
        }
      }}
    />
  )
}

export default PrivateRoute
