import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../firebase';

function PostScreenReactions({ commentsCount, likesCount }) {
	return (
		<div className="reactions">
			<p className="reactions-count likes-count">
				{likesCount}
				<span className="reactions" />Likes
			</p>
			<p className="reactions-count comments-count">
				{commentsCount} <span className="reactions" /> Comments
			</p>
		</div>
	);
}

export default PostScreenReactions;
