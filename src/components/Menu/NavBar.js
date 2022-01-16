import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

import { useAuth } from '../../Pages/SignIn/SignInContext'
import { LocalStorage } from '../../Services/LocalStorageService'
import { SignInService } from '../../Services/SignInService'

function MenuNavBar() {

  const { isAuthenticated } = useAuth()

  const MenuButton = ({ href, variant, text, hidden, onClick }) => {
    return <Button onClick={onClick} hidden={hidden} className="ml-3" href={href} variant={variant}>{text}</Button>
  }

  const signOut = () => {
    window.location.pathname = '/'
    LocalStorage.removeItem(SignInService.ACCESS_TOKEN_KEY)
  }

  return (
    <Navbar bg="light" expand="lg" className="w-100">
      <Navbar.Brand href="/home">FlashChat</Navbar.Brand>
      <Navbar.Toggle aria-controls="menu" />
      <Navbar.Collapse id="menu">
        <Nav className="ml-auto ">
          <MenuButton href="/sign-up" variant="light" text="Cadastre-se" />
          <MenuButton href="/sign-in" variant="light" text="Faça Login" />
          <MenuButton href="/chat" variant="light" text="Chat" />
          <MenuButton href="/sign-out" onClick={signOut} hidden={!isAuthenticated} variant="danger" text="Sair" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export { MenuNavBar }
