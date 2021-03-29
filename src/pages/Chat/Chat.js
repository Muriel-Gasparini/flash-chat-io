import React from 'react'
import { Row, Col, Container, Button, ListGroup, Image, } from 'react-bootstrap'
import { InputWithLabel } from '../../components/Form/InputWithLabel'

import { Page } from '../../components/page/page'
import '../../styles/chat.css'
import UserProfileImage from '../../images/icon-256x256.png'
function Chat() {

	const mockChat = [
		(
			<ul className='list-unstyled' key={0}>
				<li>
					<h3 className='text-success'>User</h3>
				</li>
				<p>Mensagem do usuário</p>
				<li>
					<h3 className='text-success'>User</h3>
				</li>
				<p>Mensagem do usuário</p>

			</ul>
		)
	]

	return (
		<Page title="FlashChat">
			<Row className='bg-light page overflow-auto'
				style={{ height: '50vh', overflowX: 'hidden' }}>
				<Col>
					<Container className=''>
						{mockChat}
						<ListGroup className="d-flex align-items justify-content-between">
							<Row>
								<Col>
									<Image src={UserProfileImage} alt="Profile Image" roundedCircle />
								</Col>
							</Row>
							<ListGroup.Item>
								User
						</ListGroup.Item>
							<p>Mensagem</p>
						</ListGroup>
					</Container>
				</Col>
			</Row>
			<Row className="align-items-center">
				<Col md={10}>
					<InputWithLabel placeholder="Type message here" type="text" style={{ fixed: 'bottom' }} />
				</Col>
				<Col md={2}>
					<Button variant='primary' type='submit' size="md">
						Send
				</Button>
				</Col>
			</Row>
		</Page>
	);
}

export { Chat }
