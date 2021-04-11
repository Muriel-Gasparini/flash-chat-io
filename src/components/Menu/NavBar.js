import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function MenuNavBar() {
  return (
    <Navbar bg="light" expand="lg" className="w-100">
      <Navbar.Brand href="/home">FlashChat</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-Navbar-nav" />
      <Navbar.Collapse id="basic-Navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/sign-up">Cadastre-se</Nav.Link>
          <Nav.Link href="/sign-in">Faça login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export { MenuNavBar }
