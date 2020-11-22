import React from 'react';
import './Timestamp.css';

function Timestamp({ timestamp }) {
	return <p className="timestamp">{new Date(timestamp.seconds * 1000).toLocaleDateString()}</p>;
}

export default Timestamp;
