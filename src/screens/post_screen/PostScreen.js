import React, { useState, useEffect } from 'react';
import './PostScreen.css';
import Header from '../../components/post_component/post_view/Header';
import Reactions from '../../components/post_component/post_view/Reactions';
import Footer from '../../components/post_component/post_view/Footer';
import Divider from '../../components/common/divider/Divider';
import PostImage from '../../components/post_component/post_view/PostImage';
import PostDescription from '../../components/post_component/post_view/PostDescription';
import { db } from '../../firebase';
import { useHistory } from 'react-router-dom';
import WriteComment from '../../components/comments/write_comment/WriteComment';
import Comment from '../../components/comments/comment/Comment';
import Sidebar from '../../components/sidebar_component/SideBar';
import TrendingPosts from '../../components/trendingposts_component/TrendingPosts';
import { Button, Alert, Card } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';

function PostScreen() {
	const [ comments, setComments ] = useState([]);
	const [ postId, setpostId ] = useState(JSON.parse(localStorage.getItem('postId')));
	const [ displayName, setdisplayName ] = useState('');
	const [ avatar, setavatar ] = useState('');
	const [ image, setimage ] = useState('');
	const [ timeStamp, settimeStamp ] = useState('');
	const [ postText, setpostText ] = useState('');

	useEffect(() => {
		console.log('comments');
		if (localStorage && localStorage.getItem('postId')) {
			setpostId(JSON.parse(localStorage.getItem('postId')));
		}
		if (localStorage && localStorage.getItem('displayName')) {
			setdisplayName(JSON.parse(localStorage.getItem('displayName')));
		}
		if (localStorage && localStorage.getItem('avatar')) {
			setavatar(JSON.parse(localStorage.getItem('avatar')));
		}
		if (localStorage && localStorage.getItem('image')) {
			setimage(JSON.parse(localStorage.getItem('image')));
		}
		if (localStorage && localStorage.getItem('timeStamp')) {
			settimeStamp(JSON.parse(localStorage.getItem('timeStamp')));
		}
		if (localStorage && localStorage.getItem('postText')) {
			setpostText(JSON.parse(localStorage.getItem('postText')));
		}

		db
			.collection('comments')
			.doc(postId)
			.collection('postComments')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => setComments(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
	}, []);

	return (
		<div className="post-screen">
			<div>
				<Sidebar />
			</div>
			<div className="post-details">
				<div className="post_body">
					<Header displayName={displayName} timeStamp={timeStamp} avatar={avatar} />
					<PostDescription postText={postText} />
					<img className="post-image" src={image} alt="" />
					{/* <Reactions postId={postId} /> */}
					<Divider />
					<Footer />
					{comments.map((comment) => (
						<Comment
							key={comment.id}
							commentId={comment.id}
							authorId={comment.data.authorId}
							timeStamp={comment.data.timestamp}
							commentText={comment.data.content}
						/>
					))}
					<WriteComment avatar={avatar} />
				</div>
			</div>
			<TrendingPosts />
		</div>
	);
}

export default PostScreen;
