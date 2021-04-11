import React, { useState } from 'react'
import { Jumbotron, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'

import { Page } from '../../Components/Page/Page'
import { ChatAnonymousMessage } from './Components/ChatAnonymousMessage'
import { ChatUserMessage } from './Components/ChatUserMessage'

function renderMessage(id, userName, messageType, message) {

  switch (messageType) {
    case 'anonymous':
      return <ChatAnonymousMessage eventKey={id} message={message} />
    case 'user':
      return <ChatUserMessage eventKey={id} userName={userName} message={message} />
  }
}

function ChatScreen() {

  const [data] = useState([
    { userName: 'Teste', messageType: 'user', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta elit nec lacus luctus, aliquam blandit orci ornare. Donec vel ipsum id quam condimentum scelerisque mattis ac risus. Etiam in ipsum gravida, finibus velit vitae, mollis massa. Donec faucibus at felis sodales sagittis. In feugiat nisl auctor maximus imperdiet. Integer aliquam felis magna, ac egestas nulla blandit vel. Nunc tempus augue sit amet ligula porta molestie.' },
    { userName: 'Teste', messageType: 'anonymous', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta elit nec lacus luctus, aliquam blandit orci ornare. Donec vel ipsum id quam condimentum scelerisque mattis ac risus. Etiam in ipsum gravida, finibus velit vitae, mollis massa. Donec faucibus at felis sodales sagittis. In feugiat nisl auctor maximus imperdiet. Integer aliquam felis magna, ac egestas nulla blandit vel. Nunc tempus augue sit amet ligula porta molestie.' },
    { userName: 'Teste', messageType: 'user', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta elit nec lacus luctus, aliquam blandit orci ornare. Donec vel ipsum id quam condimentum scelerisque mattis ac risus. Etiam in ipsum gravida, finibus velit vitae, mollis massa. Donec faucibus at felis sodales sagittis. In feugiat nisl auctor maximus imperdiet. Integer aliquam felis magna, ac egestas nulla blandit vel. Nunc tempus augue sit amet ligula porta molestie.' },
    { userName: 'Teste', messageType: 'anonymous', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta elit nec lacus luctus, aliquam blandit orci ornare. Donec vel ipsum id quam condimentum scelerisque mattis ac risus. Etiam in ipsum gravida, finibus velit vitae, mollis massa. Donec faucibus at felis sodales sagittis. In feugiat nisl auctor maximus imperdiet. Integer aliquam felis magna, ac egestas nulla blandit vel. Nunc tempus augue sit amet ligula porta molestie.' }
  ])

  return (
    <Page title="FlashChat">
      <Row>
        <Col md={12}>
          <Jumbotron fluid style={{ height: '60vh', overflowY: 'scroll', overflowX: 'hidden' }}>
            <Row>
              {data?.map((msg, i) => {
                return renderMessage(i, msg.userName, msg.messageType, msg.message)
              })}
            </Row>
          </Jumbotron>
        </Col>
      </Row>
      <InputGroup className="mb-3">
        <FormControl placeholder="Digite sua mensagem" className="mr-2"/>
        <Button>Enviar</Button>
      </InputGroup>
    </Page>
  )
}

export { ChatScreen }
