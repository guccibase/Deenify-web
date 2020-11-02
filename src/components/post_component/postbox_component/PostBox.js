import React from 'react';
import { Button, Avatar, Input } from '@material-ui/core';
import '../postbox_component/PostBox.css';

function PostBox() {
	return (
		<div className="postBox">
			<form>
				<div className="postBox_input">
					<Avatar src="https://firebasestorage.googleapis.com/v0/b/umma-26555.appspot.com/o/images%2Fusers%2FuserProfile_7995a1a8-dd50-4e9a-bec2-ebe81131bfd6.jpg?alt=media&token=21af9eca-31dc-440a-8c6d-450de47ea64c" />
					<input placeholder="New Post" type="text" />
				</div>
				<input placeholder="Enter Image Url" type="text" className="postBox_imageInput" />

				<Button className="postBox_button">Post</Button>
			</form>
		</div>
	);
}

export default PostBox;
