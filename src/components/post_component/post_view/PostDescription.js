import React from 'react';

function PostDescription({ postText }) {
	return (
		<div>
			<p className="post_description">{postText}</p>
		</div>
	);
}

export default PostDescription;
