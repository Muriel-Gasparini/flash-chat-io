import moment from 'moment'
import React, { useState } from 'react'
import { Button, Col, Form, FormFile, FormGroup, FormLabel, Jumbotron, Row } from 'react-bootstrap'

import { InputWithLabel } from '../../Components/Form/InputWithLabel'
import { Loading } from '../../Components/Loading/Loading'
import { Notify } from '../../Components/Notify/Notify'
import { Page } from '../../Components/Page/Page'
import { getInputFileAsBase64 } from '../../Services/FileSystem/dom-files'
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
          <Row className="justify-content-center">
            <Col md={6}>
              <InputWithLabel
                label="Nome"
                placeholder="Nome"
                inputType="Text"
                required
                onChange={e => {
                  setAccount({ ...account, name: e.target.value })
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
                  setAccount({ ...account, birthdate: moment(e.target.value, 'YYYY/MM/DD').toISOString() })
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
                  setAccount({ ...account, email: e.target.value })
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
                  setAccount({ ...account, password: e.target.value })
                }}
              />
            </Col>
            <Col md={6} className="align-self-center">
              <FormGroup>
                <FormLabel>Foto de perfil</FormLabel>
                <FormFile onChange={e => getInputFileAsBase64(e.target.files[0], (photo) => setAccount({ ...account, photo }))}/>
              </FormGroup>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Loading isLoading={isLoading}>
              <Button type="submit" variant="dark" className="mt-3" size="md">Criar Conta</Button>
            </Loading>
          </Row>
        </Form>
      </Jumbotron>
    </Page>
  )
}

export { SignUp }
