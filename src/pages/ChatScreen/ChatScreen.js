import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Jumbotron, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'

import { Page } from '../../Components/Page/Page'
import { LocalStorage } from '../../Services/LocalStorageService'
import { SignInService } from '../../Services/SignInService'
import { WebsocketGlobalChat } from '../../Services/Websocket/GlobalChatService'
import { ChatAnonymousMessage } from './Components/ChatAnonymousMessage'
import { ChatUserMessage } from './Components/ChatUserMessage'


function ChatScreen() {
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);

  const chatScroll = useRef()
  const websocketGlobalChat = useMemo(() => new WebsocketGlobalChat(), [])

  function RenderMessages() {
    return allMessages?.map(({ message, user }, i) => {
      const isUserMessage = user._id === userData._id
      if (isUserMessage) {
        return <ChatUserMessage key={i} userName={user.name} message={message} />
      } else {
        return <ChatAnonymousMessage key={i} message={message} photo={user.photo} />
      }
    })
  }
  
  const handleSendMessage = () => {
    websocketGlobalChat.sendMessage(message)
    setAllMessages(allMessages.concat({
      message,
      user: userData
    }))
    setMessage('')
  }

  const scrollChatToBottom = () => {
    chatScroll.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    setUserData(LocalStorage.getJSONItem(SignInService.USER_DATA_KEY))
    websocketGlobalChat.onMessage(setAllMessages)
  }, [])

  useEffect(() => {
    scrollChatToBottom()
  }, [allMessages])

  return (
    <Page title="FlashChat">
      <Row>
        <Col md={12}>
          <Jumbotron fluid style={{ height: '60vh', overflowY: 'scroll', overflowX: 'hidden' }}>
            <Row>
              <RenderMessages />
            </Row>
            <div ref={chatScroll}> </div>
          </Jumbotron>
        </Col>
      </Row>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Digite sua mensagem"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="mr-2"
        />
        <Button onClick={handleSendMessage}>Enviar</Button>
      </InputGroup>
    </Page>
  )
}

export { ChatScreen }
