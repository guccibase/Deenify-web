import React from 'react';
import './Sidebar.css';
import { ic_home } from 'react-icons-kit/md/ic_home';
import { ic_search } from 'react-icons-kit/md/ic_search';
import { ic_notifications_none } from 'react-icons-kit/md/ic_notifications_none';
import { ic_mail_outline } from 'react-icons-kit/md/ic_mail_outline';
import { ic_person_outline } from 'react-icons-kit/md/ic_person_outline';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import SidebarOption from './SidebarOptions';
import AppTitle from '../../components/common/apptitle/AppTitle';
import Divider from '../common/divider/Divider';

function SideBar() {
	return (
		<div className="sidebar-column">
			<div className="sidebar">
				{/* Twitter icon  */}
				<AppTitle />
				{/* Sidebar */}
				<SidebarOption active text="Home" icon={ic_home} />
				<SidebarOption text="Articles" icon={ic_search} />
				<SidebarOption text="Dua Requests" icon={ic_mail_outline} />
				<SidebarOption text="Notifications" icon={ic_notifications_none} />
				<SidebarOption text="Profile" icon={ic_person_outline} />
				<Divider />
				<SidebarOption text="Privacy Policy" icon={ic_more_horiz} />
				<SidebarOption text="Terms and Conditions" icon={ic_search} />
				<SidebarOption text="Repost a Problem/Bug" icon={ic_mail_outline} />
				<SidebarOption text="Help/Support" icon={ic_notifications_none} />
				<SidebarOption text="About" icon={ic_person_outline} />
				<SidebarOption text="Third Party Licensing" icon={ic_more_horiz} />
				<Divider />
			</div>
		</div>
	);
}

export default SideBar;
