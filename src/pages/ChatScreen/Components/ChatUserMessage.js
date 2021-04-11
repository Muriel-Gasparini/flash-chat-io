import React from 'react'
import { Card, Col } from 'react-bootstrap'

function ChatUserMessage({ message, eventKey }) {
  console.log(eventKey)
  return (
    <Col md={{ span: 8, offset: 4 }} sm={{ span: 11, offset: 1 }} xs={{ span: 11, offset: 1 }} className="pr-5 mb-3 justify-self-end">
      <Card bg="dark" text="light">
        <Card.Text className="p-2">
          {message}
        </Card.Text>
      </Card>
    </Col>
  )
}

export { ChatUserMessage }
