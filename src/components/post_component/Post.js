import React from 'react';
import { Avatar } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import './Post.css';
function Post({ displayName, userName, verified, timeStamp, text, avatar }) {
	return (
		<div className="post">
			<div className="post_avatar">
				<Avatar src="https://firebasestorage.googleapis.com/v0/b/umma-26555.appspot.com/o/images%2Fusers%2FuserProfile_7995a1a8-dd50-4e9a-bec2-ebe81131bfd6.jpg?alt=media&token=21af9eca-31dc-440a-8c6d-450de47ea64c" />
			</div>
			<div className="post_body">
				<div className="post_header">
					<div className="post_headerText">
						<h3>Tahir Nas{''}</h3>
					</div>
					<div className="post_headerDescription">
						<p>Building deenify web</p>
					</div>
				</div>
				<img
					src="https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif://firebasestorage.googleapis.com/v0/b/umma-26555.appspot.com/o/images%2Fusers%2FuserCover_677c8a95-8665-4c77-ae7d-79fcbe17cf52.jpg?alt=media&token=9918d7d7-808b-448b-bfd0-ffd9dbe7f60b"
					alt=""
				/>
				<div className="post_footer">
					<FavoriteBorderIcon fontSize="large" />
					<ChatBubbleOutlineIcon fontSize="large" />
					<ShareIcon fontSize="large" />
				</div>
			</div>
		</div>
	);
}

export default Post;
