import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { HomePage } from './Pages/Home/Home'
import { SignUp } from './Pages/SignUp/SignUp'
import { SignIn } from './Pages/SignIn/SignIn'
import { ChatScreen } from './Pages/ChatScreen/ChatScreen'

const ALL_ROUTES = [
  getRoute('/sign-up', <SignUp />),
  getRoute('/sign-in', <SignIn />),
  getRoute('/chat', <ChatScreen />)
]

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

export { getRoutes }
