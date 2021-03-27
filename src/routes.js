import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { HomePage } from './pages/Home/Home'
import { SignUp } from './pages/SignUp/SignUp'

function getRoute(path, component) {
  return (
    <Route path={path}>
      {component}
    </Route>
  )
}

function getRoutes() {
  return (
    <Router>
      <Switch>
        {[ALL_ROUTES, getRoute('/', HomePage)]}
      </Switch>
    </Router>
  )
}

const ALL_ROUTES = [
  getRoute('/sign-up', SignUp)
]

export { getRoutes }