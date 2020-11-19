import React, { useState, useEffect } from 'react';
import './DuaRequestScreen.css';
import Header from '../../components/post_component/post_view/Header';
import Footer from '../../components/dua_request_component/dua_request/Footer';
import Divider from '../../components/common/divider/Divider';
import PostDescription from '../../components/post_component/post_view/PostDescription';
import { db } from '../../firebase';
import WriteComment from '../../components/comments/write_comment/WriteComment';
import Comment from '../../components/comments/comment/Comment';
import SideSpace from '../../components/sidebar_component/SideSpace';
import TrendingPosts from '../../components/trendingposts_component/TrendingPosts';
import Reactions from '../../components/dua_request_component/dua_request/Reactions';

function DuaRequestView() {
	const [ comments, setComments ] = useState([]);
	const [ requestId, setRequestId ] = useState(JSON.parse(localStorage.getItem('requestId')));
	const [ displayName, setdisplayName ] = useState('');
	const [ avatar, setavatar ] = useState('');
	const [ timeStamp, settimeStamp ] = useState('');
	const [ requestText, setRequestText ] = useState(JSON.parse(localStorage.getItem('requestText')));
	const [ requesterId, setRequesterId ] = useState(JSON.parse(localStorage.getItem('requesterId')));

	useEffect(() => {
		setRequestId(JSON.parse(localStorage.getItem('requestId')));
		console.log('comments');
		// if (localStorage && localStorage.getItem('postId')) {
		// 	setpostId(JSON.parse(localStorage.getItem('postId')));
		// }
		if (localStorage && localStorage.getItem('displayName')) {
			setdisplayName(JSON.parse(localStorage.getItem('displayName')));
		}
		if (localStorage && localStorage.getItem('avatar')) {
			setavatar(JSON.parse(localStorage.getItem('avatar')));
		}

		if (localStorage && localStorage.getItem('timeStamp')) {
			settimeStamp(JSON.parse(localStorage.getItem('timeStamp')));
		}
		if (localStorage && localStorage.getItem('requestText')) {
			setRequestText(JSON.parse(localStorage.getItem('requestText')));
		}

		db
			.collection('comments')
			.doc(requestId)
			.collection('duaRequestComments')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => setComments(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));

		console.log('Page refreshed');
	}, []);

	return (
		<div className="request-view">
			<SideSpace />
			<div className="request-details">
				<div className="request_body">
					<Header displayName={displayName} timeStamp={timeStamp} avatar={avatar} />
					<PostDescription postText={requestText} />
					<Reactions requestId={requestId} requesterId={requesterId} />
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
			<SideSpace />
		</div>
	);
}

export default DuaRequestView;
