import React, { useEffect, useState } from 'react';
import Header from '../post_component/post_view/Header';
import Reactions from '../post_component/post_view/Reactions';
import Footer from '../post_component/post_view/Footer';
import Divider from '../common/divider/Divider';
import PostScreen from '../../screens/post_screen/PostScreen';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import SmallImage from '../common/images/SmallImage';

function TrendingPost({ postId, postType, authorId, image, timeStamp, postText }) {
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

	const handleClick = () => {
		setOpen(true);
	};
	return (
		<div>
			<PostScreen
				authorId={authorId}
				postType={postType}
				open={open}
				close={setOpen}
				displayName={displayName}
				avatar={avatar}
				postId={postId}
				image={image}
				timeStamp={timeStamp}
				postText={postText}
			/>
			<div className="trending_post">
				<Header displayName={displayName} timeStamp={timeStamp} avatar={avatar} />
				<div className="trendingPost_Description">
					<p onClick={handleClick}>{postText}</p>
					<SmallImage handleClick={handleClick} image={image} />
				</div>
				<Reactions click={handleClick} postType={postType} postId={postId} userId={currentUser.uid} />
				<Divider />
				<Footer click={handleClick} />
			</div>
		</div>
	);
}

export default TrendingPost;
