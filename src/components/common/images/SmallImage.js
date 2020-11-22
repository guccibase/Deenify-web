import React from 'react';
import './Images.css';

export default function SmallImage({ handleClick, image }) {
	return (
		<div>
			<img onClick={handleClick} className="small-image" src={image} alt="" />
		</div>
	);
}
