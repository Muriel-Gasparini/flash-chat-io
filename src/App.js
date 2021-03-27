import React from 'react'

import { MenuNavBar } from './components/menu/nav-bar';
import { getRoutes } from './routes';

function App() {
  return (
    <>
      <MenuNavBar />
      {getRoutes()}
    </>
  )
}

export default App;
