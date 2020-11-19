import React, { useState, useEffect } from 'react';
import '../../post_component/post_view/Post.css';
import Header from './Header';
import Reactions from './Reactions';
import Footer from './Footer';
import Divider from '../../common/divider/Divider';
import PostDescription from '../../post_component/post_view/PostDescription';
import { db } from '../../../firebase';
import { useHistory } from 'react-router-dom';
import WriteComment from '../../comments/write_comment/WriteComment';

function DuaRequest({ requestId, postType, authorId, timeStamp, requestText }) {
	const [ displayName, setDisplayName ] = useState('');
	const [ avatar, setAvatar ] = useState('');
	const history = useHistory();

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
		localStorage.setItem('displayName', JSON.stringify(displayName));
		localStorage.setItem('avatar', JSON.stringify(avatar));
		localStorage.setItem('requestId', JSON.stringify(requestId));
		localStorage.setItem('timeStamp', JSON.stringify(timeStamp));
		localStorage.setItem('requestText', JSON.stringify(requestText));
		localStorage.setItem('requesterId', JSON.stringify(authorId));

		history.push('/requestView');
	};

	return (
		<div className="post">
			<div className="post_body" onClick={handleClick}>
				<Header displayName={displayName} timeStamp={timeStamp} avatar={avatar} />
				<PostDescription postText={requestText} />
				<Reactions requestId={requestId} requesterId={authorId} />
				<Divider />
				<Footer />
				<WriteComment avatar={avatar} />
			</div>
		</div>
	);
}

export default DuaRequest;
