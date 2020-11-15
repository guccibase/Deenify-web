import React from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

function Footer() {
	return (
		<div className="post_footer">
			<div className="like footerbtn">
				<FavoriteBorderIcon fontSize="default" />
				<span className="reaction">Like</span>
			</div>
			<div className="comment footerbtn">
				<ChatBubbleOutlineIcon fontSize="default" />
				<span className="reaction">Comment</span>
			</div>
			<div className="share footerbtn">
				<ShareIcon fontSize="default" />
				<span className="reaction">Share</span>
			</div>
		</div>
	);
}

export default Footer;
