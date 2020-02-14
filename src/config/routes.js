import React from 'react'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from '../components/login'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route></Route>
      </Switch>
    </Router>
  )
}

export default Routes
