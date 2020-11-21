import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Notification from '../../components/notification_components/Notification';
import { db } from '../../firebase';

function NotificationsScreen() {
	const [ activities, setActivities ] = useState([]);
	const { currentUser } = useAuth();
	localStorage.setItem('screen', JSON.stringify('Notifications'));

	useEffect(() => {
		db
			.collection('activities')
			.doc(currentUser.uid)
			.collection('userActivities')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => setActivities(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
	}, []);
	return (
		<div>
			<h1>Notifications</h1>
			{activities.map((activity) => <Notification name={activity.data.comment} />)}
		</div>
	);
}

export default NotificationsScreen;
