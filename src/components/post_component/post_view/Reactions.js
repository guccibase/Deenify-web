import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';

function Reactions({ postId, postType, click }) {
	const [ likesCount, setLikesCount ] = useState();
	const [ commentsCount, setCommentsCount ] = useState();

	useEffect(() => {
		console.log('reactions');

		var likes = db.collection('allPosts').doc(postId);

		likes
			.get()
			.then(function(doc) {
				if (doc.exists) {
					setLikesCount(doc.data().likeCount);
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			})
			.catch(function(error) {
				console.log('Error getting document:', error);
			});

		var Comments = db.collection('comments').doc(postId).collection('postComments');

		Comments.get()
			.then((doc) => {
				setCommentsCount(doc.size);
			})
			.catch(function(error) {
				console.log('Error getting document:', error);
			});
	}, []);

	return (
		<div className="reactions">
			<p className="reactions-count likes-count">
				{likesCount}
				<span className="reactions" />Likes
			</p>
			<p onClick={click} className="reactions-count comments-count">
				{commentsCount} <span className="reactions" /> Comments
			</p>
		</div>
	);
}

export default Reactions;
