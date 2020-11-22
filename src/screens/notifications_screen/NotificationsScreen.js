import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Notification from '../../components/notification_components/Notification';
import { db } from '../../firebase';
import { useHistory } from 'react-router-dom';
import SideBar from '../../components/sidebar_component/SideBar';
import SideSpace from '../../components/sidebar_component/SideSpace';
import './NotificationsScreen.css';

function NotificationsScreen() {
	const [ activities, setActivities ] = useState([]);
	const [ error, setError ] = useState('');
	const { currentUser, signout } = useAuth();
	const history = useHistory();
	localStorage.setItem('screen', JSON.stringify('Notifications'));

	useEffect(() => {
		db
			.collection('activities')
			.doc(currentUser.uid)
			.collection('userActivities')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => setActivities(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
	}, []);

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
		<div className="notifications-screen">
			<SideBar />
			<div className="notifications">
				<h1>Notifications</h1>
				{activities.map((activity) => <Notification key={activity.id} activity={activity} />)}
			</div>
			<SideSpace />
		</div>
	);
}

export default NotificationsScreen;
