import React, { useRef } from 'react';
import './SignUp.css';
import { Button, Card, Form } from 'react-bootstrap';
import { Container } from '@material-ui/core';

function SignUp() {
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	return (
		<div className="deenify">
			<h1>Deenify</h1>
			<Container
				className="d-flex align-items-center justify-content-center"
				style={{ minHeight: '40vh', maxHeight: '100vh' }}
			>
				<div className="signup w-100" style={{ maxWidth: '400px' }}>
					<Card>
						<Card.Body>
							<h2 className="text-center mb-4">Sign Up</h2>
							<Form>
								<Form.Group id="Name">
									<Form.Label>Name</Form.Label>
									<Form.Control type="name" ref={nameRef} required />
								</Form.Group>

								<Form.Group id="email">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>
								<Form.Group id="password">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" ref={passwordRef} required />
								</Form.Group>
								<Form.Group id="confirm_password">
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control type="password" ref={confirmPasswordRef} required />
								</Form.Group>
								<Button className="signup_btn w-100" type="submit">
									Sign Up
								</Button>
							</Form>
						</Card.Body>
					</Card>
					<div className="w-100 text-center mt-2">Already have an account? Log in</div>
				</div>
			</Container>
		</div>
	);
}

export default SignUp;
