import { AuthProvider } from './contexts/AuthContext';
import React from 'react';
import Home from './screens/homeScreen/Home';
import SignUp from './screens/signup/SignUp';
import Login from './screens/signIN/Login';
import ForgotPassword from './screens/forgot_password/ForgotPassword';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PrivacyPolicy from './components/more_info/privacy_policy/PrivacyPolicy';
function App() {
	return (
		<PrivacyPolicy />
		//BEM
		// <Router>
		// 	<AuthProvider>
		// 		<Switch>
		// 			<PrivateRoute exact path="/" component={Home} />
		// 			<Route path="/login" component={Login} />
		// 			<Route path="/signup" component={SignUp} />
		// 			<Route path="/forgotPassword" component={ForgotPassword} />
		// 		</Switch>
		// 	</AuthProvider>
		// </Router>
	);
}

export default App;
