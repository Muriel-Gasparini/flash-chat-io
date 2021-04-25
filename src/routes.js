import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { HomePage } from './Pages/Home/Home'
import { SignUp } from './Pages/SignUp/SignUp'
import { SignIn } from './Pages/SignIn/SignIn'
import { ChatScreen } from './Pages/ChatScreen/ChatScreen'

const ALL_ROUTES = [
  { path: '/', component: HomePage},
  { path: '/sign-up', component: SignUp},
  { path: '/sign-in', component: SignIn},
  { path: '/chat', component: ChatScreen}
]

function getRoutes(props) {
  return (
    <Router>
      <Switch>
        { ALL_ROUTES.map((x, i) => {
            return (
              <Route key={i} path={x.path} component={x.component} {...props}/>
            )
          }).reverse() 
        }
      </Switch>
    </Router>
  )
}

export { getRoutes }
