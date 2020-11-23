import React, { useState, useEffect } from 'react';
import './Notification.css';
// import Divider from '../../common/divider/Divider';
import { db } from '../../firebase';
import PostScreen from '../../screens/post_screen/PostScreen';
import { useAuth } from '../../contexts/AuthContext';
import UserAvatar from '../common/avatars/UserAvatar';
import SmallImage from '../common/images/SmallImage';
import Timestamp from '../common/timestamp/Timestamp';

function Notification({ activity }) {
	const [ displayName, setDisplayName ] = useState('');
	const [ avatar, setAvatar ] = useState('');
	const [ open, setOpen ] = useState(false);
	const { currentUser } = useAuth();
	const [ postTimeStamp, setPostTimeStamp ] = useState('');
	const [ postText, setpostText ] = useState('');
	const [ currentUserName, setCurrentUserName ] = useState(JSON.parse(localStorage.getItem('userName')));
	const [ currentUserProfileImage, setCurrentUserProfileImage ] = useState(
		JSON.parse(localStorage.getItem('userProfileImage'))
	);

	useEffect(() => {
		var docRef = db.collection('users').doc(activity.data.fromUserId);

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

	async function handleClick() {
		console.log(currentUserName + 'is user name');

		if (currentUserName === null) {
			console.log('currentUserName called');

			// get user profile details
			var docRef = db.collection('users').doc(currentUser.uid);

			await docRef
				.get()
				.then(function(doc) {
					if (doc.exists) {
						//	setDisplayName(doc.data().name);
						localStorage.setItem('userName', JSON.stringify(doc.data().name));
						setCurrentUserName(JSON.parse(localStorage.getItem('userName')));

						//	setDisplayimage(doc.data().profileImageUrl);
						localStorage.setItem('userProfileImage', JSON.stringify(doc.data().profileImageUrl));
						setCurrentUserProfileImage(JSON.parse(localStorage.getItem('userProfileImage')));
					} else {
						// doc.data() will be undefined in this case
						console.log('No such document!');
					}
				})
				.catch(function(error) {
					console.log('Error getting document:', error);
				});
		}

		// get post data
		var post = db.collection('feeds').doc(currentUser.uid).collection('userFeed').doc(activity.data.postId);

		await post
			.get()
			.then(function(doc) {
				if (doc.exists) {
					setPostTimeStamp(doc.data().timestamp);
					setpostText(doc.data().caption);
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			})
			.catch(function(error) {
				console.log('Error getting document:', error);
			});

		setOpen(true);
	}

	return (
		<div>
			<PostScreen
				authorId={currentUser.uid}
				postType={'feedPost'}
				open={open}
				close={setOpen}
				displayName={currentUserName}
				avatar={currentUserProfileImage}
				postId={activity.data.postId}
				image={activity.data.postImageUrl}
				timeStamp={postTimeStamp}
				postText={postText}
			/>
			<div className="notification">
				<div className="notification-avatar">
					<UserAvatar image={avatar} />
				</div>
				<div className="notification-details">
					<div className="activity" onClick={handleClick}>
						{activity.data.comment === null ? (
							<p className="notification-text">{displayName} liked your post</p>
						) : (
							<p className="notification-text">
								{displayName} commented: "{activity.data.comment}"
							</p>
						)}
						<Timestamp timestamp={activity.data.timestamp} />
					</div>
				</div>
				{activity.data.postImageUrl ? (
					<div className="notification-image">
						<SmallImage handleClick={handleClick} image={activity.data.postImageUrl} />
					</div>
				) : null}
			</div>
		</div>
	);
}

export default Notification;
