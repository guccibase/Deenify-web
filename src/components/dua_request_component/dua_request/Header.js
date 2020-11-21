import React from 'react';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import Icon from 'react-icons-kit';
import UserAvatar from '../../common/avatars/UserAvatar';

function Header({ avatar, displayName, timeStamp }) {
	return (
		<div className="post-header">
			<div className="post-header-items">
				<UserAvatar image={avatar} />
				<div className="post-header-name-and-time">
					<div>
						<h3 className="post_headerText">{displayName}</h3>
					</div>
					<div>
						<p className="post-header-time">{new Date(timeStamp.seconds * 1000).toLocaleDateString()}</p>
					</div>
				</div>
			</div>
			<div className="more-icon">
				<Icon icon={ic_more_horiz} size={30} />
			</div>
		</div>
	);
}

export default Header;
