import React, { useState, useEffect } from 'react';
import { Button, Avatar, Input } from '@material-ui/core';
import '../postbox_component/PostBox.css';
import { db } from '../../../firebase';
import { useAuth } from '../../../contexts/AuthContext';

function PostBox({}) {
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
		<div className="postBox">
			<form>
				<div className="postBox_input">
					<Avatar src={avatar} />
					<input placeholder="New Post" type="text" />
				</div>
				<input placeholder="Enter Image Url" type="text" className="postBox_imageInput" />

				<Button className="postBox_button">Post</Button>
			</form>
		</div>
	);
}

export default PostBox;
