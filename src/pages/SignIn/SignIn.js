import React from 'react'
import { Button, Col, Form, Jumbotron, Row } from 'react-bootstrap'

import { InputWithLabel } from '../../components/Form/InputWithLabel'
import { Page } from '../../components/page/page'

function SignIn() {
  return (
    <Page title="Faça Login no FlashChat">
      <Jumbotron>
        <Form>
          <Row className="justify-content-center">
            <Col md={6}>
              <InputWithLabel
                label="Email"
                placeholder="email@email.com"
                inputType="Email"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6}>
              <InputWithLabel
                label="Senha"
                placeholder="Senha"
                inputType="Password"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Button className="mt-3" size="md">Logar</Button>
          </Row>
        </Form>
      </Jumbotron>
    </Page>
  )
}

export { SignIn }
