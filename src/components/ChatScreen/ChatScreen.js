import { Jumbotron, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap'
import React from 'react'
import { Page } from '../page/page'


function ChatScreen() {
  return (
    <Page title="FlashChat">
      <Jumbotron style={{ height: '70vh', overflowY: 'scroll' }}>
        <ListGroup>
        </ListGroup>
      </Jumbotron>
      <InputGroup className="mb-3">
        <FormControl placeholder="Sua mensagem aqui" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        <Button>Enviar</Button>
      </InputGroup>
    </Page>
  )

}

export { ChatScreen }