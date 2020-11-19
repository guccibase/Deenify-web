import React, { useState, useEffect } from 'react';
import './DuaRequestScreen.css';
import Sidebar from '../../components/sidebar_component/SideBar';
import DuaRequests from '../../components/dua_request_component/dua_requests/DuaRequests';
import TrendingPosts from '../../components/trendingposts_component/TrendingPosts';
import { Button, Alert, Card } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function DuaRequestScreen() {
	const [ error, setError ] = useState('');
	const { currentUser, signout } = useAuth();
	const history = useHistory();
	localStorage.setItem('screen', JSON.stringify('Dua Requests'));

	async function handleLogOut() {
		setError('');
		try {
			await signout();
			history.refresh();
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
			</div>
			{/* Feed */}
			<DuaRequests />

			{/* Widgets */}
			<TrendingPosts />
		</div>
	);
}

export default DuaRequestScreen;
