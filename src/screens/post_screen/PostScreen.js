import React, { useState, useEffect } from 'react';
import './PostScreen.css';
import Header from '../../components/post_component/post_view/Header';
import Footer from '../../components/post_component/post_view/Footer';
import Divider from '../../components/common/divider/Divider';
import PostDescription from '../../components/post_component/post_view/PostDescription';
import { db } from '../../firebase';
import WriteComment from '../../components/comments/write_comment/WriteComment';
import Comment from '../../components/comments/comment/Comment';
import SideSpace from '../../components/sidebar_component/SideSpace';
import TrendingPosts from '../../components/trendingposts_component/TrendingPosts';
import Reactions from '../../components/post_component/post_view/Reactions';

function PostScreen({ open, close,displayName,postId,avatar,image,timeStamp,postText }) {
	const [comments, setComments] = useState([]);
	const [height, setHeight] = useState("");


	useEffect(() => {
	
		image? setHeight("100vh"):setHeight("50vh");
		if(open){
			db
				.collection('comments')
				.doc(postId)
				.collection('postComments')
				.orderBy('timestamp', 'desc')
				.onSnapshot((snapshot) => setComments(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
		}

		console.log('Page refreshed');
	}, [open]);
	if (!open) return null;

	return (
	<>
			<div className="overlay" onClick ={()=> close(false)} />

			<div className="post-screen" style={{height: height}}>
				{/* <SideSpace /> */}
				<div className="post-details">
					<div className="postScreen-body">
						<Header displayName={displayName} timeStamp={timeStamp} avatar={avatar} />
						<PostDescription postText={postText} />
						<img className="post-image" src={image} alt="" />
						<Reactions postId={postId} postType="feedPost" />
						<Divider />
						<Footer />
						<div className="comment-box" >
							<WriteComment className="writeComment" avatar={avatar} />
						</div>
						{comments.map((comment) => (
							<Comment
								key={comment.id}
								commentId={comment.id}
								authorId={comment.data.authorId}
								timeStamp={comment.data.timestamp}
								commentText={comment.data.content}
							/>
						))}
					</div>
					
				</div>

				{/* <SideSpace /> */}
			</div>
	</>
	);
}

export default PostScreen;
