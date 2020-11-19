import React from 'react';
import { useHistory } from 'react-router-dom';

function SideSpace() {
	const history = useHistory();
	return <div onClick={() => history.goBack()} className="sideSpace" />;
}

export default SideSpace;
