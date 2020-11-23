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
		width: theme.spacing(8),
		height: theme.spacing(8)
	}
}));
function UserProfileImage({ image }) {
	const classes = useStyles();

	return (
		<div className="profile-image">
			<Avatar className={classes.large} variant="rounded" src={image} />
		</div>
	);
}

export default UserProfileImage;
