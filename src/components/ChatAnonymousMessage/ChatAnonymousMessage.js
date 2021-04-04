import React from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'

function ChatAnonymousMessage({ message }) {
  <ListGroup.Item bsPrefix="borderless" className="d-flex flex-row-reverse bd-highlight">
    <Row className="p-2 bd-highlight">
      <Col md={5}>
        <Card style={{ width: '48rem' }} bg="dark" text="light">
          <Card.Text className="p-2">
            {message}
          </Card.Text>
        </Card>
      </Col>
    </Row>
  </ListGroup.Item>
}
export { ChatAnonymousMessage }