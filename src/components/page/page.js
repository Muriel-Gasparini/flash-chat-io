import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Page({ title, children }) {

  return (
    <Container fluid>
      <Row className="p-2">
        <Col className="justify-self-start" md={12}>
          <h3 className="display-4 text-center mb-3">{title}</h3>
        </Col>
        <Col md={12}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export { Page }