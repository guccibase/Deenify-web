import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';
import { useHistory } from 'react-router-dom';
import SideBar from '../../components/sidebar_component/SideBar';
import SideSpace from '../../components/sidebar_component/SideSpace';
import './ProfileScreen.css';
import UserAvatar from '../../components/common/avatars/UserAvatar';
import ProfileCoverImage from '../../components/profile_components/ProfileCoverImage';
import ProfileDetails from '../../components/profile_components/ProfileDetails';

function ProfileScreen() {
	const [ activities, setActivities ] = useState([]);
	const [ error, setError ] = useState('');
	const { currentUser, signout } = useAuth();
	const [ currentUserName, setCurrentUserName ] = useState(JSON.parse(localStorage.getItem('userName')));
	const [ currentUserProfileImage, setCurrentUserProfileImage ] = useState(
		JSON.parse(localStorage.getItem('userProfileImage'))
	);
	const [ currentUserCoverImage, setCurrentUserCoverImage ] = useState(
		JSON.parse(localStorage.getItem('userCoverImage'))
	);
	const [ currentUserBio, setCurrentUserBio ] = useState(JSON.parse(localStorage.getItem('userBio')));

	const history = useHistory();
	localStorage.setItem('screen', JSON.stringify('Profile'));

	useEffect(() => {
		if (currentUserName === null) {
			console.log('currentUserName called');

			// get user profile details
			var docRef = db.collection('users').doc(currentUser.uid);

			docRef
				.get()
				.then(function(doc) {
					if (doc.exists) {
						//	setDisplayName(doc.data().name);
						localStorage.setItem('userName', JSON.stringify(doc.data().name));
						setCurrentUserName(JSON.parse(localStorage.getItem('userName')));

						//	setDisplayimage(doc.data().profileImageUrl);
						localStorage.setItem('userProfileImage', JSON.stringify(doc.data().profileImageUrl));
						setCurrentUserProfileImage(JSON.parse(localStorage.getItem('userProfileImage')));

						//	setBio(doc.data().bio);
						localStorage.setItem('userBio', JSON.stringify(doc.data().bio));
						setCurrentUserBio(JSON.parse(localStorage.getItem('userBio')));

						//	setCoverImage(doc.data().coverImageUrl);
						localStorage.setItem('userCoverImage', JSON.stringify(doc.data().coverImageUrl));
						setCurrentUserCoverImage(JSON.parse(localStorage.getItem('userCoverImage')));
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
		var post = db.collection('feeds').doc(currentUser.uid).collection('userFeed');
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
		<div className="profile-screen">
			<SideBar />
			<div className="profile">
				<div className="profile-name1">
					<h1>{currentUserName}</h1>
				</div>
				<ProfileDetails cover={currentUserCoverImage} profile={currentUserProfileImage} bio={currentUserBio} />
			</div>
			<div className="side" />
		</div>
	);
}

export default ProfileScreen;
