import React from 'react';

function PostImage({ postText, image }) {
	return <img className="post-image" src={image} alt="" />;
}

export default PostImage;
