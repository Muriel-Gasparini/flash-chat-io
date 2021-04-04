import { Jumbotron, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Page } from '../page/page'
import { ChatAnonymousMessage } from '../ChatAnonymousMessage/ChatAnonymousMessage'
import { ChatUserMessage } from '../ChatUserMessage/ChatUserMessage'


function renderMessage(id, userName, messageType, message) {
  switch (messageType) {
    case 'anonymous':
      return <ChatAnonymousMessage key={id} message={message} />
    case 'user':
      return <ChatUserMessage key={id} userName={userName} message={message} />
  }
}


function ChatScreen() {
  const [data, setData] = useState([
    {
      userName: 'Teste',
      messageType: 'user',
      message: 'dsalkdsaklkldsakldsaklsdalkklsdalksdalkkldsal'
    },
    {
      userName: 'Teste',
      messageType: 'anonymous',
      message: 'dsalkdsaklkldsakldsaklsdalkklsdalksdalkkldsal'
    },
    {
      userName: 'Teste',
      messageType: 'user',
      message: 'dsalkdsaklkldsakldsaklsdalkklsdalksdalkkldsal'
    },
    {
      userName: 'Teste',
      messageType: 'user',
      message: 'dsalkdsaklkldsakldsaklsdalkklsdalksdalkkldsal'
    },
    {
      userName: 'Teste',
      messageType: 'anonymous',
      message: 'dsalkdsaklkldsakldsaklsdalkklsdalksdalkkldsal'
    },
    {
      userName: 'Teste',
      messageType: 'user',
      message: 'dsalkdsaklkldsakldsaklsdalkklsdalksdalkkldsal'
    },
    {
      userName: 'Teste',
      messageType: 'anonymous',
      message: 'dsalkdsaklkldsakldsaklsdalkklsdalksdalkkldsal'
    },
    {
      userName: 'Teste',
      messageType: 'user',
      message: 'dsalkdsaklkldsakldsaklsdalkklsdalksdalkkldsal'
    },
    {
      userName: 'Teste',
      messageType: 'user',
      message: 'dsalkdsaklkldsakldsaklsdalkklsdalksdalkkldsal'
    }

  ])

  useEffect(() => {
    setInterval(() => {
      setData(data.concat({ userName: 'Teste', messageType: 'user', message: 'klsdalkdaslkadskldaslklkdsa' }))
    }, 5000)
  }, [])
  return (
    <Page title="FlashChat">
      <Jumbotron style={{ height: '70vh', overflowY: 'scroll' }}>
        <ListGroup>
          {data.map((msg, i) => {
            return renderMessage(i.id, msg.userName, msg.messageType, msg.message)
          })}
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