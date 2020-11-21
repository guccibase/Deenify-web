import React, { useState, useEffect } from 'react';
import '../../post_component/post_view/Post.css';
import Header from './Header';
import Divider from '../../common/divider/Divider';
import PostDescription from '../../post_component/post_view/PostDescription';
import { db } from '../../../firebase';
import WriteComment from '../../comments/write_comment/WriteComment';
import PostScreen from '../../../screens/post_screen/PostScreen';
import DuaRequestReactions from './DuaRequestReactions';
import DuaRequestFooter from './DuaRequestFooter';

function DuaRequest({ requestId, postType, authorId, timeStamp, requestText }) {
	const [ displayName, setDisplayName ] = useState('');
	const [ avatar, setAvatar ] = useState('');
	const [ open, setOpen ] = useState(false);

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
				postId={requestId}
				timeStamp={timeStamp}
				postText={requestText}
			/>
			<div className="post">
				<div className="post_body" onClick={handleClick}>
					<Header displayName={displayName} timeStamp={timeStamp} avatar={avatar} />
					<PostDescription postText={requestText} />
					<DuaRequestReactions requestId={requestId} requesterId={authorId} />
					<Divider />
					<DuaRequestFooter />
					<WriteComment avatar={avatar} />
				</div>
			</div>
		</div>
	);
}

export default DuaRequest;
