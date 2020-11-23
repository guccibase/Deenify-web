import React from 'react';
import './SideBarOption.css';
import { Icon } from 'react-icons-kit';
import { useHistory } from 'react-router-dom';

function SidebarOptions({ text, icon }) {
	//const { active } = useSidebar();
	let itsActive = JSON.parse(localStorage.getItem('screen')) === text;

	console.log(text + JSON.parse(localStorage.getItem('screen')));
	const history = useHistory();
	return (
		<a
			className="sidebarOptions"
			href=""
			onClick={() => {
				localStorage.setItem('screen', JSON.stringify(text));
				history.push(`/${text}`);
			}}
		>
			<div className={`sidebarOptions ${itsActive && 'sidebarOptions--active'}`}>
				<Icon className="icons" size={30} icon={icon} />
				<h2>{text}</h2>
			</div>
		</a>
	);
}

export default SidebarOptions;
