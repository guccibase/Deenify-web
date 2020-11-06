import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyDRDIQ9A9081JEToP64greQ1Mnmzf6vxCY',
	authDomain: 'deenify-web.firebaseapp.com',
	databaseURL: 'https://deenify-web.firebaseio.com',
	projectId: 'deenify-web',
	storageBucket: 'deenify-web.appspot.com',
	messagingSenderId: '904443819980',
	appId: '1:904443819980:web:a4aada827b098788850f69',
	measurementId: 'G-9SJ6VF6F8T'
});

export const auth = app.auth();
export default app;
