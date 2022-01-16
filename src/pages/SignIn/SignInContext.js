import React, { createContext, useContext, useEffect, useState } from 'react'

import { LocalStorage } from '../../Services/LocalStorageService'
import { SignInService } from '../../Services/SignInService'

const AuthUserContext = createContext({})

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const userToken = LocalStorage.getItem(SignInService.ACCESS_TOKEN_KEY)

  useEffect(() => {
    userToken && setIsAuthenticated(true)
  }, [userToken])

  return (
    <AuthUserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      { children}
    </AuthUserContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthUserContext)
}

export { AuthProvider }
