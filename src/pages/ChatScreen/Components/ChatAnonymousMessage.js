import React, { memo } from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'

function ChatAnonymousMessage({ userName, message, photo, date }) {
  return (
      <Row className="w-100 flex-nowrap align-items-center mb-2 mt-1 ml-1 ">
        <Col xs={2} sm={2} className="d-flex justify-content-center flex-column align-items-center">
          <Image src={photo || "https://www.pngkey.com/png/detail/413-4139797_unknown-person-icon-png-submarine-force-library-and.png"} roundedCircle width={50} height={50} />
          <h6 className="text-center">{userName}</h6>
        </Col>
        <Col xs={9} className="mr-3 ">
          <Card bg="secondary" text="light" className="">
            <Card.Text className="p-2">
              {message}
            </Card.Text>
          </Card>
          <Card.Text>
            {date}
          </Card.Text>
        </Col>
      </Row>
  )
}

export default memo(ChatAnonymousMessage)
