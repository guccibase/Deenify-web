import React, { useRef, useState } from 'react';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import AppTitle from '../../components/common/apptitle/AppTitle';
import './ForgotPassword.css';

function ForgotPassword() {
	const emailRef = useRef();

	const { resetPassword } = useAuth();
	const [ error, setError ] = useState('');
	const [ loading, setLoaidng ] = useState(false);
	const [ message, setMessage ] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setMessage('');
			setLoaidng(true);
			setError('');
			await resetPassword(emailRef.current.value);
			setMessage('Check your email for futher instructions');
		} catch (e) {
			setError('Failed to reset password');
		}
		setLoaidng(false);
	}
	return (
		<div className="forgot-password">
			<AppTitle />
			<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '40vh' }}>
				<div className="reset-password w-100" style={{ maxWidth: '400px' }}>
					<Card>
						<Card.Body>
							<h2 className="text-center mb-4">Password Reset</h2>
							{error && <Alert variant="danger">{error}</Alert>}
							{message && <Alert variant="success">{message}</Alert>}
							<Form onSubmit={handleSubmit}>
								<Form.Group id="email">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>

								<Button disabled={loading} className="signup_btn w-100" type="submit">
									Reset Password
								</Button>
							</Form>
							<div className="w-100 text-center mt-2">
								Back to{' '}
								<Link className="login-link" to="/login">
									Log In
								</Link>
							</div>
						</Card.Body>
					</Card>
					<div className="w-100 text-center mt-2">
						Need an account?{' '}
						<Link className="signup-link" to="/signup">
							Sign Up
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default ForgotPassword;
