import React, { memo } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function ChatUserMessage({ message, date }) {
  return (
    <Row className="w-100 justify-content-end mb-2 mt-2 ml-1">
      <Col xs={12} className="d-flex justify-content-end">
        <Card bg="dark" text="light" className='d-inline-block text-wrap'>
          <Card.Text className="p-2">
            {message}
          </Card.Text>
        </Card>
      </Col>
      <Col xs={12}>
        <Card.Text className="text-right">
          {date}
        </Card.Text>
      </Col>
    </Row>
  )
}

export default memo(ChatUserMessage)
