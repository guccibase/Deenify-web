import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

function Notification({ name }) {
	return (
		<div>
			<h2>{name}</h2>
		</div>
	);
}

export default Notification;
