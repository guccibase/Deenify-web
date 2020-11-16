import React, { useState, useEffect } from 'react';
import './TrendingPosts.css';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import TrendingPost from './TrendingPost';
function TrendingPosts() {
	const [ trendingPosts, setTrendingPosts ] = useState([]);
	const { currentUser } = useAuth();

	useEffect(() => {
		console.log('feed posts');

		db
			.collection('feeds')
			.doc(currentUser.uid)
			.collection('userFeed')
			.orderBy('likeCount', 'desc')
			// .orderBy('timestamp', 'desc')
			.limit(10)
			.onSnapshot((snapshot) => setTrendingPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
	}, []);

	return (
		<div className="trending-column">
			<div className="trending">
				<div className="trending_header">
					<h3>Trending</h3>
					{trendingPosts.map((post) => (
						<TrendingPost
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
		</div>
	);
}

export default TrendingPosts;
