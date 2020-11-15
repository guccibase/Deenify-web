import { AuthProvider } from './contexts/AuthContext';
import React from 'react';
import Home from './screens/homeScreen/Home';
import SignUp from './screens/signup/SignUp';
import Login from './screens/signIN/Login';
import ForgotPassword from './screens/forgot_password/ForgotPassword';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PostScreen from './screens/post_screen/PostScreen';
function App() {
	return (
		//BEM
		<Router>
			<AuthProvider>
				<Switch>
					<PrivateRoute exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route path="/forgotPassword" component={ForgotPassword} />
					<Route path="/postScreen" component={PostScreen} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
