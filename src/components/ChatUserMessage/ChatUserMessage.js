import React from 'react'
import { Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import UserProfileImage from '../../images/icon-256x256.png'

function ChatUserMessage({ userName, message }) {
  return (
    <ListGroup.Item bsPrefix="borderless p-4">
      <Row>
        <Col md={1} className="d-flex flex-column align-items-center">
          <Image src={UserProfileImage} roundedCircle width={50} height={50} />
          <h6>{userName}</h6>
        </Col>
        <Col md={2}>
          <Card style={{ width: '48rem' }} bg="secondary" text="light">
            <Card.Text className="p-2">
              {message}
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}
export { ChatUserMessage }