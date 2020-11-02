import React from 'react';
import '../feed_component/Feed.css';
import PostBox from '../post_component/postbox_component/PostBox';
import Post from '../post_component/Post';

function Feed() {
	return (
		<div className="feed">
			<div className="feed-header">
				{/* Header */}
				<h2>Home</h2>
			</div>
			<div>
				{/* Post box */}
				<PostBox />
				{/* posts */}
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}

export default Feed;
