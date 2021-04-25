import React from 'react'
import { ToastContainer } from 'react-toastify'

import { MenuNavBar } from './Components/Menu/NavBar'
import { getRoutes } from './routes'

function App() {
  return (
    <>
      <MenuNavBar />
      {getRoutes()}
      <ToastContainer />
    </>
  )
}

export default App
