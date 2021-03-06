import React, { useRef, useState } from 'react';
import './Login.css';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import AppTitle from '../../components/common/apptitle/AppTitle';

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
			setError('Your email or password is incorrect');
		}
		setLoaidng(false);
	}
	return (
		<div className="login">
			<AppTitle />
			<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '40vh' }}>
				<div className="w-100" style={{ maxWidth: '400px' }}>
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

								<Button disabled={loading} className="signin_btn w-100" type="submit">
									Log in
								</Button>
							</Form>
							<div className="w-100 text-center mt-3">
								<Link className="forgot-password-link" to="/forgotPassword">
									Forgot Password?
								</Link>
							</div>
						</Card.Body>
					</Card>

					<div className="w-100 text-center mt-2">
						Don't have an account?{' '}
						<Link className="signup-link" to="/signup">
							Sign Up
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Login;
