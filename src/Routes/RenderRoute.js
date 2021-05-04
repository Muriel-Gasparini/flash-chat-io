import React from 'react'
import { Route } from 'react-router-dom'

import { UnauthorizedPage } from '../Pages/Error/Unauthorized'
import { useAuth } from '../Pages/SignIn/SignInContext'

function RenderRoute({ path, component, needAuthentication = true, ...props }) {

  const { isAuthenticated } = useAuth()

  if (needAuthentication && !isAuthenticated) {
    return <UnauthorizedPage />
  }

  return (
    <Route path={path} component={component} {...props} />
  )
}

export { RenderRoute }
