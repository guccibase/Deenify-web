import React from 'react';
import './SideBarOption.css';
import { Icon } from 'react-icons-kit';

function SidebarOptions({ active, text, icon }) {
	return (
		<a className="sidebarOptions" href="" onClick={() => alert('Test')}>
			<div className={`sidebarOptions ${active && 'sidebarOptions--active'}`}>
				<Icon className="icons" size={30} icon={icon} />
				<h2>{text}</h2>
			</div>
		</a>
		
	);
}

export default SidebarOptions;
