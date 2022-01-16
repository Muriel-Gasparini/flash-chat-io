import React from 'react'
import { Page } from '../../Components/Page/Page'
import { AiFillAlert } from 'react-icons/ai'
import { Icon } from '../../Components/Icon/Icons'
import { Row, Button, Jumbotron } from 'react-bootstrap'

function UnauthorizedPage() {
  return (
    <Page title={<Icon component={<AiFillAlert />} size="6%" />}>
      <Jumbotron>
        <h1>Não autorizado</h1>
        <p>Você não possui acesso pois não está logado.</p>
        <Row className="justify-content-start p-2">
          <Button href="/" className="mr-5 mb-3" variant="dark" size="large" >Retornar para a Home</Button>
          <Button className="mb-3" href="/sign-in" variant="dark" size="large" >Fazer login</Button>
        </Row>
      </Jumbotron>
    </Page>
  )
}

export { UnauthorizedPage }