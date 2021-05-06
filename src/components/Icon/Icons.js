import React from 'react'
import { IconContext } from "react-icons";


function Icon({ styles, component, size = '2em' }) {
  return (
    <IconContext.Provider value={{ ...styles, size }}>
      <div>
        {component}
      </div>
    </IconContext.Provider>
  )
}

export { Icon }
