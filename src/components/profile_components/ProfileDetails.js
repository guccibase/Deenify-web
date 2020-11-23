import React from 'react';
import ProfileCoverImage from './ProfileCoverImage';
import UserProfileImage from './UserProfileImage';
import ProfileBio from './ProfileBio';
import './ProfileDetails.css';

function ProfileDetails({ cover, profile, bio }) {
	return (
		<div className="profile-details">
			<div className="profile-images">
				<ProfileCoverImage image={cover} />
				<UserProfileImage image={profile} />
			</div>
		</div>
	);
}

export default ProfileDetails;
