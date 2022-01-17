import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'

function ChatAnonymousMessage({ userName, message, photo }) {
  return (
    <Col md={12} className="ml-2 mb-3 pr-">
      <Row className="flex-nowrap">
        <Col lg={1} md={2} xs={3} sm={2}>
          <Image src={photo} roundedCircle width={50} height={50} />
          <h6>{userName}</h6>
        </Col>
        <Col lg={10} md={10} xs={9} sm={10}>
          <Card bg="secondary" text="light">
            <Card.Text className="p-2">
              {message}
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}

export { ChatAnonymousMessage }
