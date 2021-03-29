import React from 'react'
import { Row, Col, Container, Button, Navbar, Form } from 'react-bootstrap'
import '../../styles/chat.css'
function Chat() {
	return (
		<>
			<div
				className='bg-light page'
				style={{ height: '90vh', overflowX: 'hidden', overflowY: 'hidden' }}
			>
				<Row>
					<Col>
						<Container>
							<div className='d-flex align-items-center justify-content-between position-fixed'>
								<h3 className='text-center py-3 d-inline'>
									Flash Chat
								</h3>
							</div>
						</Container>
					</Col>
				</Row>
				<Row>
					<Col>
						<Container>
							<div className='d-flex align-items-center justify-content-between right'>
								<ul className='list-unstyled'>
									<li>
										<h3 className='text-success'>User</h3>
									</li>
									<p>Mensagem do usuário</p>
									<li>
										<h3 className='text-success'>User</h3>
									</li>
									<p>Mensagem do usuário</p>

									<li>
										<h3>User</h3>
									</li>
									<p>Mensagem do usuário</p>
									<li>
										<h3>User</h3>
									</li>
									<p>Mensagem do usuário</p>
									<li>
										User
										</li>
									<p>Mensagem do usuário</p>
									<li>
										User
										</li>
									<p>Mensagem do usuário</p>
									<p>Mensagem do usuário</p>
									<li>
										User
										</li>
									<p>Mensagem do usuário</p>
									<p>Mensagem do usuário</p>
									<li>
										User
										</li>
									<p>Mensagem do usuário</p>
								</ul>

							</div>
						</Container>
					</Col>
				</Row>
				<Navbar fixed='bottom'>
					<Container className=''>
						<Form
							inline
							className='w-100 d-flex justify-content-between align-items-center'
						>
							<Form.Group style={{ flex: 1 }}>
								<Form.Control
									style={{ width: '100%' }}
									required
									type='text'
									placeholder='Type Message here...'
								/>
							</Form.Group>
							<Button variant='primary' type='submit'>
								Send
							</Button>
						</Form>
					</Container>
				</Navbar>
			</div>
		</>
	);
}

export { Chat }
