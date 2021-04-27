import moment from 'moment'
import React, { useState } from 'react'
import { Button, Col, Form, Jumbotron, Row, Spinner } from 'react-bootstrap'

import { InputWithLabel } from '../../Components/Form/InputWithLabel'
import { Notify } from '../../Components/Notify/Notify'
import { Page } from '../../Components/Page/Page'
import { SignUpService } from '../../Services/SignUpService'

function SignUp({ history }) {

  const [account, setAccount] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const signUpService = new SignUpService()

  const createAccount = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)

      await signUpService.createAccount(account)

      Notify.success('Conta criada com sucesso!')
      history.push('/')
    } catch (error) {
      Notify.error(error.toString())
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Page title="Cadastre-se no FlashChat">
      <Jumbotron>
        <Form onSubmit={createAccount}>
          <Row>
            <Col md={6}>
              <InputWithLabel
                label="Nome"
                placeholder="Nome"
                inputType="Text"
                required
                onChange={e => {
                  account.name = e.target.value
                  setAccount({ ...account })
                }}
              />
            </Col>
            <Col md={6}>
              <InputWithLabel
                label="Data de Nascimento"
                placeholder="Data de Nascimento"
                inputType="Date"
                required
                onChange={e => {
                  account.birthdate = moment(e.target.value, 'YYYY/MM/DD').toISOString()
                  setAccount({ ...account })
                }}
              />
            </Col>
            <Col md={6}>
              <InputWithLabel
                label="Email"
                placeholder="email@email.com"
                inputType="Email"
                required
                onChange={e => {
                  account.email = e.target.value
                  setAccount({ ...account })
                }}
              />
            </Col>
            <Col md={6}>
              <InputWithLabel
                label="Senha"
                placeholder="Senha"
                inputType="Password"
                required
                onChange={e => {
                  account.password = e.target.value
                  setAccount({ ...account })
                }}
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            {
              isLoading ? <Spinner variant="dark" animation="border" /> :
                <Button type="submit" className="mt-3" size="md">Criar Conta</Button>
            }
          </Row>
        </Form>
      </Jumbotron>
    </Page>
  )
}

export { SignUp }
