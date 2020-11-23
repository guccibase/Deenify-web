import React from 'react';

function ProfileCoverImage({ image }) {
	return (
		<div className="cover-image">
			<img src={image} />
		</div>
	);
}

export default ProfileCoverImage;
