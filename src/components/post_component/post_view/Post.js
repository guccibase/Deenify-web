import React, { useState, useEffect } from 'react';
import './Post.css';
import Header from './Header';
import Reactions from './Reactions';
import Footer from './Footer';
import Divider from '../../common/divider/Divider';
import PostImage from './PostImage';
import PostDescription from './PostDescription';
import { db } from '../../../firebase';

function Post({ authorId, image, timeStamp, postText }) {
	const [ displayName, setDisplayName ] = useState('');
	const [ avatar, setAvatar ] = useState('');

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

	return (
		<div className="post">
			<div className="post_body">
				<Header displayName={displayName} timeStamp={timeStamp} avatar={avatar} />
				<PostDescription postText={postText} />
				<PostImage image={image} />
				<Reactions />
				<Divider />
				<Footer />
				<Divider />
			</div>
		</div>
	);
}

export default Post;
