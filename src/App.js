import React from 'react'

import { MenuNavBar } from './Components/Menu/NavBar'
import { getRoutes } from './routes'

function App() {
  return (
    <>
      <MenuNavBar />
      {getRoutes()}
    </>
  )
}

export default App
