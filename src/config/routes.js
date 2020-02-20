import React from 'react'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from '../components/login'
import PrivateRoute from './privateRoute'
import CharactersScreen from '../screens/CharactersScreen'
import CharacterScreen from '../screens/CharacterScreen'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <PrivateRoute
          exact
          path='/characters'
          component={CharactersScreen}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path='/characters/:id'
          component={CharacterScreen}
        ></PrivateRoute>
      </Switch>
    </Router>
  )
}

export default Routes
