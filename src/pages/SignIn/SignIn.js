import React, { useState } from 'react'
import { Button, Col, Form, Jumbotron, Row } from 'react-bootstrap'
import axios from 'axios'

import { InputWithLabel } from '../../Components/Form/InputWithLabel'
import { Loading } from '../../Components/Loading/Loading'
import { Notify } from '../../Components/Notify/Notify'
import { Page } from '../../Components/Page/Page'
import { LocalStorage } from '../../Services/LocalStorageService'
import { makeSignService, SignInService } from '../../Services/SignInService'
import { useAuth } from './SignInContext'

const signInService = makeSignService()

function SignIn({ history }) {

  const [credentials, setCredentials] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const { setIsAuthenticated } = useAuth()

  const doLogin = async event => {
    event.preventDefault()
    try {
      setIsLoading(true)

      const { token } = await signInService.login(credentials)

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const userData = await signInService.getUserInformation();
//console.log("ASAPOS", userData)
      LocalStorage.setJSONItem(SignInService.USER_DATA_KEY, userData.user)
      LocalStorage.setItem(SignInService.ACCESS_TOKEN_KEY, token)

      setIsAuthenticated(true)

      Notify.success('Login realizado com sucesso!')
      history.push('/chat')
    } catch (error) {
      Notify.error(error.toString())
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Page title="Faça Login no FlashChat">
      <Jumbotron>
        <Form onSubmit={doLogin}>
          <Row className="justify-content-center">
            <Col md={6}>
              <InputWithLabel
                label="Email"
                placeholder="email@email.com"
                inputType="Email"
                required
                onChange={e => setCredentials({...credentials, email: e.target.value })}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6}>
              <InputWithLabel
                label="Senha"
                placeholder="Senha"
                inputType="Password"
                required
                onChange={e => setCredentials({...credentials, password: e.target.value })}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Loading isLoading={isLoading}>
              <Button type="submit" variant="dark" className="mt-3" size="md">Logar</Button>
            </Loading>
          </Row>
        </Form>
      </Jumbotron>
    </Page>
  )
}

export { SignIn }
