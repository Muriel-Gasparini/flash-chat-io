import React from 'react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './styles/App.scss';


import { MenuNavBar } from './Components/Menu/NavBar'
import { AuthProvider } from './Pages/SignIn/SignInContext'
import { ALL_ROUTES } from './Routes/routes'
import { RenderRoute } from './Routes/RenderRoute'

function App() {
  return (
    <AuthProvider>
      <MenuNavBar />
      <Router>
        <Switch>
          {
            ALL_ROUTES.map(({ path, component, needAuthentication }, i) => {
              return (
                <RenderRoute key={i} path={path} needAuthentication={needAuthentication} component={component} />
              )
            }).reverse()
          }
        </Switch>
      </Router>
      <ToastContainer />
    </AuthProvider>
  )
}

export default App
