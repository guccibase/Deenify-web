import React from 'react';

function PostImage({ postWidth, image }) {
	return <img className="post-image" width="600px" src={image} alt="" />;
}

export default PostImage;
