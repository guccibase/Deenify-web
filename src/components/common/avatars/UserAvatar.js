import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3)
	},

	med: {
		width: theme.spacing(4.5),
		height: theme.spacing(4.5),
		borderRadius: 10
	},

	large: {
		width: theme.spacing(7),
		height: theme.spacing(7)
	}
}));
function UserAvatar({ image }) {
	const classes = useStyles();

	return (
		<div>
			<Avatar className={classes.med} variant="rounded" src={image} />
		</div>
	);
}

export default UserAvatar;
