import React from 'react'
import { Button, Col, Form, Jumbotron, Row } from 'react-bootstrap'

import { InputWithLabel } from '../../Components/Form/InputWithLabel'
import { Page } from '../../Components/Page/Page'

function SignUp() {
  return (
    <Page title="Cadastre-se no FlashChat">
      <Jumbotron>
        <Form>
          <Row>
            <Col md={6}>
              <InputWithLabel
                label="Nome"
                placeholder="Nome"
                inputType="Text"
              />
            </Col>
            <Col md={6}>
              <InputWithLabel
                label="Email"
                placeholder="email@email.com"
                inputType="Email"
              />
            </Col>
            <Col md={12}>
              <InputWithLabel
                label="Data de Nascimento"
                placeholder="Data de Nascimento"
                inputType="Date"
              />
            </Col>
            <Col md={6}>
              <InputWithLabel
                label="Senha"
                placeholder="Senha"
                inputType="Password"
              />
            </Col>
            <Col md={6}>
              <InputWithLabel
                label="Confirmar Senha"
                placeholder="Confirmar senha"
                inputType="Password"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Button className="mt-3" size="md">Criar Conta</Button>
          </Row>
        </Form>
      </Jumbotron>
    </Page>
  )
}

export { SignUp }
