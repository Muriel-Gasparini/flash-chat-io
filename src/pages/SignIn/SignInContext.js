import React, { createContext, useContext, useEffect, useState } from 'react'

import { LocalStorage } from '../../Services/LocalStorageService'
import { ACCESS_TOKEN_KEY } from './SignIn'

const AuthUserContext = createContext({})

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const userToken = LocalStorage.getItem(ACCESS_TOKEN_KEY)

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
  console.log("salve da angola", useContext(AuthUserContext))
  return useContext(AuthUserContext)
}

export { AuthProvider }
