import React, { useState, useEffect } from 'react';
import './Home.css';
import Sidebar from '../../components/sidebar_component/SideBar';
import Feed from '../../components/feed_component/Feed';
import TrendingPosts from '../../components/trendingposts_component/TrendingPosts';
import { Button, Alert, Card } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function Home() {
	const [ error, setError ] = useState('');
	const { currentUser, signout } = useAuth();
	const history = useHistory();

	async function handleLogOut() {
		setError('');
		try {
			await signout();
			history.push('/login');
		} catch (e) {
			setError('Failed to log out');
		}
	}

	return (
		<div className="home">
			{/* Sidebar */}
			<div>
				<Sidebar />
				{/* logout */}

				<Button variant="link" onClick={handleLogOut}>
					Log Out
				</Button>
				<strong>Email:</strong>
				{currentUser.uid}
			</div>
			{/* Feed */}
			<Feed error={error} />

			{/* Widgets */}
			<TrendingPosts />
		</div>
	);
}

export default Home;
