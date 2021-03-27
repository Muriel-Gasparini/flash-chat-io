import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Page({ title, children }) {

  return (
    <Container>
      <Row className="p-3">
        <Col className="justify-self-start" md={12}>
          <h3 className="display-4 text-center">{title}</h3>
        </Col>
        <Col md={12}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export { Page }