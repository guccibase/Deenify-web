import React, { useRef, useState } from 'react';
import './SignUp.css';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import AppTitle from '../../components/common/apptitle/AppTitle';

function SignUp() {
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const { signUp } = useAuth();
	const [ error, setError ] = useState('');
	const [ loading, setLoaidng ] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setError('Passwords do not match');
		}
		try {
			setLoaidng(true);
			setError('');
			await signUp(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		} catch (e) {
			setError('Failed to create account');
		}
		setLoaidng(false);
	}
	return (
		<div className="signup">
			<AppTitle />
			<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
				<div className="w-100" style={{ maxWidth: '400px' }}>
					<Card>
						<Card.Body>
							<h2 className="text-center mb-4">Sign Up</h2>
							{error && <Alert variant="danger">{error}</Alert>}
							<Form onSubmit={handleSubmit}>
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
								<Button disabled={loading} className="signup_btn w-100" type="submit">
									Sign Up
								</Button>
							</Form>
						</Card.Body>
					</Card>
					<div className="w-100 text-center mt-2">
						Already have an account?{' '}
						<Link className="login-link" to="/login">
							Log In
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default SignUp;
