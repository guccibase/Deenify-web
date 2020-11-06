import React from 'react';
import './Sidebar.css';
import { ic_home } from 'react-icons-kit/md/ic_home';
import { ic_search } from 'react-icons-kit/md/ic_search';
import { ic_notifications_none } from 'react-icons-kit/md/ic_notifications_none';
import { ic_mail_outline } from 'react-icons-kit/md/ic_mail_outline';
import { ic_person_outline } from 'react-icons-kit/md/ic_person_outline';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import SidebarOption from './SidebarOptions';

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
		</div>
	);
}

export default SideBar;
