import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Jumbotron, FormControl, Button, Form } from 'react-bootstrap'
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized'
// import { Notify } from '../../Components/Notify/Notify'

import { Page } from '../../Components/Page/Page'
import { LocalStorage } from '../../Services/LocalStorageService'
import { SignInService } from '../../Services/SignInService'
import { WebsocketGlobalChat } from '../../Services/Websocket/GlobalChatService'
import ChatAnonymousMessage from './Components/ChatAnonymousMessage'
import ChatUserMessage from './Components/ChatUserMessage'


function ChatScreen() {
  const [userData, setUserData] = useState(null);
  const [allMessages, setAllMessages] = useState([]);
  const listRef = useRef()
  const userMessageRef = useRef()

  const websocketGlobalChat = useMemo(() => new WebsocketGlobalChat(), [])

  const cache = useMemo(() => new CellMeasurerCache({
    fixedWidth: false,
    defaultHeight: 215
  }), [])

  function RenderMessages({ index, key, parent, style }) {

    if (!allMessages[index]) {
      return null
    }
    const isUserMessage = allMessages[index].user.id === userData.id
    const { user, message, createdAt } = allMessages[index]
    const date = new Intl.DateTimeFormat("pt-BR", {
      minute: '2-digit',
      hour: '2-digit'
    }).format(new Date(createdAt))
    return (
      <CellMeasurer
        cache={cache}
        parent={parent}
        key={key}
        rowIndex={index}
      >
        <div key={key} style={{
          ...style,
          width: "100%"
        }} className="d-flex">
          {
            isUserMessage ? <ChatUserMessage  userName={user.name} message={message} date={date} /> :
              <ChatAnonymousMessage message={message} userName={user.name} photo={user.photo} date={date} />
          }
        </div>
      </CellMeasurer>
    )
  }

  const handleSendMessage = (event) => {
    event.preventDefault()

    const message = userMessageRef.current.value
    // if (message?.trim()?.length > 350) {
    //   Notify.error('A mensagem não pode conter mais de 200 caracteres.')
    //   return
    // }
    websocketGlobalChat.sendMessage(message)
    setAllMessages(allMessages.concat({
      message: message?.trim(),
      user: userData,
      createdAt: new Date().toISOString()
    }))

    userMessageRef.current.value = ''
  }

  const handleMessage = (data) => {
    setAllMessages(allMessages.concat({ ...data, message: data.text }))
  }

  useEffect(() => {
    websocketGlobalChat.onMessage(handleMessage)
    return () => {
      websocketGlobalChat.removeOnMessageListerners()
    }
  }, [allMessages])

  useEffect(() => {
    setUserData(LocalStorage.getJSONItem(SignInService.USER_DATA_KEY))
    websocketGlobalChat.onRetrieveMessages((messages) => setAllMessages(messages.map(x => ({ message: x.text, user: x.user }))))
  }, [])

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToRow(allMessages.length)
    }
  }, [allMessages])

  return (
    <Page title="FlashChat">
      <Jumbotron fluid style={{ height: '60vh', padding: 0 }}>
        <AutoSizer disableWidth>
          {
            ({  height }) => {
              return <List
                ref={listRef}
                width={1}
                height={height}
                className="list"
                deferredMeasurementCache={cache}
                rowHeight={cache.rowHeight}
                rowRenderer={RenderMessages}
                rowCount={allMessages.length}
                overscanRowCount={3}
                containerStyle={{
                  width: "100%",
                  maxWidth: "100%"
                }}
                style={{
                  width: "100%"
                }}
              />
            }
          }
        </AutoSizer>
      </Jumbotron>
      <Form className="mb-3 d-flex" onSubmit={handleSendMessage}>
        <FormControl
          ref={userMessageRef}    
          placeholder="Digite sua mensagem"
          className="mr-2"
          maxLength={50}
          required
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Page>
  )
}

export { ChatScreen }
