import React, { useEffect, useState } from 'react';
import Header from '../post_component/post_view/Header';
import Reactions from '../post_component/post_view/Reactions';
import Footer from '../post_component/post_view/Footer';
import Divider from '../common/divider/Divider';
import PostImage from '../post_component/post_view/PostImage';
import PostDescription from '../post_component/post_view/PostDescription';
import { db } from '../../firebase';
import { useHistory } from 'react-router-dom';
function TrendingPost({ postId, postType, authorId, image, timeStamp, postText }) {
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

	const handleClick = () => {};
	return (
		<div className="trending_post">
			<Header displayName={displayName} timeStamp={timeStamp} avatar={avatar} />
			<div className="trendingPost_Description">
				<p
					onClick={() => {
						localStorage.setItem('displayName', JSON.stringify(displayName));
						localStorage.setItem('avatar', JSON.stringify(avatar));
						localStorage.setItem('postId', JSON.stringify(postId));
						localStorage.setItem('image', JSON.stringify(image));
						localStorage.setItem('timeStamp', JSON.stringify(timeStamp));
						localStorage.setItem('postText', JSON.stringify(postText));
						history.push('/postScreen');
					}}
				>
					{postText}
				</p>
				<img onClick={handleClick} className="trendingPost-image" src={image} alt="" />
			</div>
			<Reactions click={handleClick} postType={postType} postId={postId} />
			<Divider />
			<Footer click={handleClick} />
		</div>
	);
}

export default TrendingPost;
