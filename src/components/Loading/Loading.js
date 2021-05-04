import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading({ isLoading, children }) {
  return isLoading ? <Spinner variant="dark" animation="border" /> : children
}

export { Loading }
