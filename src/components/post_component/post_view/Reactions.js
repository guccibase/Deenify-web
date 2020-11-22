import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';

function Reactions({ postId, postType, userId }) {
	const [ likesCount, setLikesCount ] = useState();
	const [ commentsCount, setCommentsCount ] = useState();

	//console.log(postId);
	useEffect(() => {
		var likes = db.collection('feeds').doc(userId).collection('userFeed').doc(postId);

		likes
			.get()
			.then(function(doc) {
				if (doc.exists) {
					setLikesCount(doc.data().likeCount);
					console.log(doc.data().caption);

					console.log(doc.data().likeCount);
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
			<p className="reactions-count">
				{likesCount}
				<span className="reactions" />Likes
			</p>
			<p className="reactions-count">
				{commentsCount} <span className="reactions" /> Comments
			</p>
		</div>
	);
}

export default Reactions;
