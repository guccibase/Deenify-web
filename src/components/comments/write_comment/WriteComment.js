import React from 'react';
import { Avatar } from '@material-ui/core';
import './WriteComment.css';
import UserAvatar from '../../common/avatars/UserAvatar';

function WriteComment({ avatar }) {
	return (
		<div className="write-comment">
			<div className="comment-avatar">
				<UserAvatar image={avatar} />
			</div>
			<div className="comment_input">
				<input type="text" placeholder="Type comment" />
			</div>
		</div>
	);
}

export default WriteComment;
