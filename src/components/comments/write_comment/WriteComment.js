import React from 'react';
import { Avatar } from '@material-ui/core';
import './WriteComment.css';

function WriteComment({ avatar }) {
	return (
		<div className="write-comment">
			<div className="comment-avatar">
				<Avatar className="write-comment-avatar" src={avatar} />
			</div>
			<div className="comment_input">
				<input type="text" placeholder="Type comment" />
			</div>
		</div>
	);
}

export default WriteComment;
