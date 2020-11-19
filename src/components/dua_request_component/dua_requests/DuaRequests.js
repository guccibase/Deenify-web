import React, { useEffect, useState } from 'react';
import './DuaRequests.css';
import RequestBox from '../submit_request_box/RequestBox';
import DuaRequest from '../dua_request/DuaRequest';
import SearchIcon from '@material-ui/icons/Search';
import { db } from '../../../firebase';
import { useAuth } from '../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { usePosts } from '../../../contexts/PostsContext';

function DuaRequests({ error }) {
	const [ requests, setRequests ] = useState([]);
	const { currentUser } = useAuth();
	const { requestList, setRequestList } = usePosts();
	const history = useHistory();

	useEffect(() => {
		console.log('requests loaded');
		console.log(requestList.length);

		if (requestList.length === 0) {
			console.log('requests fetching');

			db
				.collection('duaRequests')
				.doc(currentUser.uid)
				.collection('request')
				.orderBy('timestamp', 'desc')
				.limit(40)
				.onSnapshot((snapshot) =>
					setRequestList(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
				);
		}
		//setPostList(posts);
	}, []);
	// console.log('test test');
	// posts.map((post) => {
	// 	let date = new Date(post.data.timestamp.seconds * 1000).toLocaleString();
	// 	console.log(date);
	// });

	return (
		<div className="dua_requests">
			<div className="request-header">
				{/* Header */}

				<h4>Dua Requests</h4>
			</div>
			<div>
				{/* Post box */}
				<RequestBox />
				{/* posts */}
				{requestList.map((request) => (
					<DuaRequest
						key={request.id}
						requestId={request.id}
						postType="duaRequest"
						authorId={request.data.authorId}
						timeStamp={request.data.timestamp}
						requestText={request.data.request}
					/>
				))}
			</div>
		</div>
	);
}

export default DuaRequests;
