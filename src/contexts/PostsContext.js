import React, { useContext, useState } from 'react';

const PostsContext = React.createContext();

export function usePosts() {
	return useContext(PostsContext);
}

export function PostsProvider({ children }) {
	const [ postList, setPostList ] = useState([]);
	const [ requestList, setRequestList ] = useState([]);

	const values = {
		setPostList,
		postList,
		requestList,
		setRequestList
	};

	return <PostsContext.Provider value={values}>{children}</PostsContext.Provider>;
}
