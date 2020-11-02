import React from 'react';
import './Sidebar.css';
import { twitter } from 'react-icons-kit/fa/twitter';
import { ic_home } from 'react-icons-kit/md/ic_home';
import { ic_search } from 'react-icons-kit/md/ic_search';
import { ic_notifications_none } from 'react-icons-kit/md/ic_notifications_none';
import { ic_mail_outline } from 'react-icons-kit/md/ic_mail_outline';
import { ic_bookmark_border } from 'react-icons-kit/md/ic_bookmark_border';
import { ic_list } from 'react-icons-kit/md/ic_list';
import { ic_person_outline } from 'react-icons-kit/md/ic_person_outline';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import { u1F1E9 } from 'react-icons-kit/noto_emoji_regular/u1F1E9';
import SidebarOption from './SidebarOptions';
import { Button } from '@material-ui/core';

function SideBar() {
	return (
		<div className="sidebar">
			{/* Twitter icon  */}
			<text className="sidebar-deenify-icon">Deenify</text>
			{/* Sidebar */}
			<SidebarOption active text="Home" icon={ic_home} />
			<SidebarOption text="Articles" icon={ic_search} />
			<SidebarOption text="Dua Requests" icon={ic_mail_outline} />
			<SidebarOption text="Notifications" icon={ic_notifications_none} />
			<SidebarOption text="Profile" icon={ic_person_outline} />
			<SidebarOption text="More" icon={ic_more_horiz} />

			{/* post */}
			<Button variant="outlined" className="sidebar-post-button" fullWidth>
				New Post
			</Button>
		</div>
	);
}

export default SideBar;
