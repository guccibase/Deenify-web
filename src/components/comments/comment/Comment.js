import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { db } from '../../../firebase';

import './Comment.css';
import UserAvatar from '../../common/avatars/UserAvatar';

function Comment({ commentId, authorId, timeStamp, commentText }) {
	const [ avatar, setAvatar ] = useState('https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg');
	const [ displayName, setDisplayName ] = useState('Tahir Nas');
	// const [ timeStamp, setTimeStamp ] = useState('233112233');
	// const [ comment, setComment ] = useState(
	// 	'This is a test, this  is a test this is a esThis is a test, this  is a test this is a esThis is a test, this  is a test this is a esThis is a test, this  is a test this is a esThis is a test, this  is a test this is a es'
	// );

	useEffect(() => {
		var docRef = db.collection('users').doc(authorId);

		docRef
			.get()
			.then(function(doc) {
				if (doc.exists) {
					console.log('Document data:', doc.data().name);
					setDisplayName(doc.data().name);
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
		<div className="comment">
			<div className="comment_avatar">
				<UserAvatar image={avatar} />
			</div>
			<div className="comment-details-section">
				<div className="comment-details">
					<div>
						<h3 className="commenter-name">{displayName}</h3>
					</div>

					<div>
						<p className="comment-text">{commentText}</p>
					</div>
					<div>
						<p className="comment-time">{new Date(timeStamp.seconds * 1000).toLocaleDateString()}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Comment;
