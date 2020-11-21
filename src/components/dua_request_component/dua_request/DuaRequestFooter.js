import React from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import duahands from '/Users/tahirunasuru/dev/deenify-web/deenify/src/icons/duahands.png';
import ShareIcon from '@material-ui/icons/Share';

function DuaRequestFooter({ click }) {
	return (
		<div className="post_footer">
			<div className="will-make-dua footerbtn">
				<img src={duahands} className="dua-hands" alt="DuaHands" />
				<span className="reaction">Will make dua</span>
			</div>
			<div onClick={click} className="comment footerbtn">
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

export default DuaRequestFooter;
