import React, { useState, useEffect } from 'react';
import { Button, Avatar, Input } from '@material-ui/core';
import './RequestBox.css';
import { db } from '../../../firebase';
import { useAuth } from '../../../contexts/AuthContext';

function RequestBox({}) {
	// const [displayName, setDisplayName] = useState('');
	const [ avatar, setAvatar ] = useState('');
	const { currentUser } = useAuth();

	// get user profile details
	var docRef = db.collection('users').doc(currentUser.uid);
	useEffect(() => {
		docRef
			.get()
			.then(function(doc) {
				if (doc.exists) {
					console.log('postbox data:', doc.data().name);
					//	setDisplayName(doc.data().name);
					setAvatar(doc.data().profileImageUrl);
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			})
			.catch(function(error) {
				console.log('Error getting document:', error);
			});
	}, []);

	return (
		<div className="requestBox">
			<form>
				<div className="requestBox_input">
					<Avatar src={avatar} />
					<div className="request-text-area">
						<textarea placeholder="New request" rows="2" cols="50" />
					</div>
				</div>
				<Button className="postBox_button">Submit</Button>
			</form>
		</div>
	);
}

export default RequestBox;
