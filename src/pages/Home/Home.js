import React from 'react'
import { Jumbotron, Row, Button } from 'react-bootstrap'

import { Page } from '../../Components/Page/Page'

function HomePage() {
  return (
    <Page>
      <Jumbotron>
        <h1>Faça sua conta e comece a usar o FlashChat!</h1>
        <Row className="justify-content-start ml-1 mt-4">
          <Button variant="dark" href="/sign-in">Faça login</Button>
          <h6 className="pr-2 pl-2 align-self-center">ou</h6>
          <Button variant="dark" href="/sign-up">Cadastre-se</Button>
        </Row>
      </Jumbotron>
    </Page>
  )
}

export { HomePage }
