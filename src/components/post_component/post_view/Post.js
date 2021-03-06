import React, { useState, useEffect } from 'react';
import './Post.css';
import Header from './Header';
import Reactions from './Reactions';
import Footer from './Footer';
import Divider from '../../common/divider/Divider';
import PostImage from './PostImage';
import PostDescription from './PostDescription';
import { db } from '../../../firebase';
import WriteComment from '../../comments/write_comment/WriteComment';
import PostScreen from '../../../screens/post_screen/PostScreen';
import { useAuth } from '../../../contexts/AuthContext';

function Post({ postId, postType, authorId, image, timeStamp, postText }) {
	const [ displayName, setDisplayName ] = useState('');
	const [ avatar, setAvatar ] = useState('');
	const [ open, setOpen ] = useState(false);
	const { currentUser } = useAuth();

	useEffect(() => {
		var docRef = db.collection('users').doc(authorId);

		docRef
			.get()
			.then(function(doc) {
				if (doc.exists) {
					console.log('Document data:', doc.data().name);
					setDisplayName(doc.data().name);
					setAvatar(doc.data().profileImageUrl);
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			})
			.catch(function(error) {
				console.log('Error getting document:', error);
			});
	}, []);

	const handleClick = (event) => {
		setOpen(true);
	};

	return (
		<div>
			<PostScreen
				postType={postType}
				authorId={authorId}
				open={open}
				close={setOpen}
				displayName={displayName}
				avatar={avatar}
				postId={postId}
				image={image}
				timeStamp={timeStamp}
				postText={postText}
			/>
			<div className="post">
				<div className="post_body" onClick={handleClick}>
					<Header displayName={displayName} timeStamp={timeStamp} avatar={avatar} />
					<PostDescription postText={postText} />
					<PostImage image={image} postWidth="600px" />
					<Reactions userId={currentUser.uid} postType={postType} postId={postId} />
					<Divider />
					<Footer />
					<WriteComment avatar={avatar} />
				</div>
			</div>
		</div>
	);
}

export default Post;
