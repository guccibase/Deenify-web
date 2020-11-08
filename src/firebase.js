import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyAa1QJRM6s8IA2sWno36LpebARF9PSN8M4',
	authDomain: 'umma-26555.firebaseapp.com',
	databaseURL: 'https://umma-26555.firebaseio.com',
	projectId: 'umma-26555',
	storageBucket: 'umma-26555.appspot.com',
	messagingSenderId: '158514191600',
	appId: '1:158514191600:web:961d83be53d396cb2e7635',
	measurementId: 'G-37FXHT4RVW'
});

export const auth = app.auth();
export const db = app.firestore();
export default app;
