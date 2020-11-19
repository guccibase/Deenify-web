import React, { useEffect, useState } from 'react';
import '../feed_component/Feed.css';
import PostBox from '../post_component/postbox_component/PostBox';
import Post from '../post_component/post_view/Post';
import SearchIcon from '@material-ui/icons/Search';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { PostsProvider, usePosts } from '../../contexts/PostsContext';

function Feed({ error }) {
	const [ posts, setPosts ] = useState([]);
	const { currentUser } = useAuth();
	const { setPostList, postList } = usePosts();
	const history = useHistory();

	useEffect(() => {
		console.log('feed loaded');
		console.log(postList.length);

		if (postList.length === 0) {
			console.log('posts fetching');

			db
				.collection('feeds')
				.doc(currentUser.uid)
				.collection('userFeed')
				.orderBy('timestamp', 'desc')
				.limit(100)
				.onSnapshot((snapshot) => setPostList(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
		}
		//setPostList(posts);
	}, []);
	// console.log('test test');
	// posts.map((post) => {
	// 	let date = new Date(post.data.timestamp.seconds * 1000).toLocaleString();
	// 	console.log(date);
	// });

	return (
		<div className="feed">
			<div className="feed-header">
				{/* Header */}
				<div className="search_input">
					<SearchIcon className="searchIcon" />
					<input placeholder="Search" />
				</div>
				<h4>{error}</h4>
			</div>
			<div>
				{/* Post box */}
				<PostBox />
				{/* posts */}
				{postList.map((post) => (
					<Post
						key={post.id}
						postId={post.id}
						postType="feedPost"
						authorId={post.data.authorId}
						image={post.data.imageUrl}
						timeStamp={post.data.timestamp}
						postText={post.data.caption}
					/>
				))}
			</div>
		</div>
	);
}

export default Feed;
