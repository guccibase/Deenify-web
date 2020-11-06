import React, { useRef, useState } from 'react';
import './Login.css';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login, currentUser } = useAuth();
	const [ error, setError ] = useState('');
	const [ loading, setLoaidng ] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setLoaidng(true);
			setError('');
			await login(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		} catch (e) {
			setError('Failed to sign in');
		}
	}
	return (
		<div className="deenify">
			<h1>Deenify</h1>
			<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '40vh' }}>
				<div className="login w-100" style={{ maxWidth: '400px' }}>
					<Card>
						<Card.Body>
							<h2 className="text-center mb-4">Log In</h2>
							{error && <Alert variant="danger">{error}</Alert>}
							<Form onSubmit={handleSubmit}>
								<Form.Group id="email">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>
								<Form.Group id="password">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" ref={passwordRef} required />
								</Form.Group>

								<Button disabled={loading} className="signup_btn w-100" type="submit">
									Log in
								</Button>
							</Form>
						</Card.Body>
					</Card>
					<div className="w-100 text-center mt-2">
						Don't have an account? <Link to="/signup">Sign Up</Link>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Login;
