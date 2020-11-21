import { AuthProvider } from './contexts/AuthContext';
import React from 'react';
import Home from './screens/homeScreen/Home';
import SignUp from './screens/signup/SignUp';
import Login from './screens/signIN/Login';
import ForgotPassword from './screens/forgot_password/ForgotPassword';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PostScreen from './screens/post_screen/PostScreen';
import { PostsProvider } from './contexts/PostsContext';
import { SidebarProvider } from './contexts/SidebarContext';
import ArticlesScreen from './screens/articles/ArticlesScreen';
import DuaRequestScreen from './screens/dua_request_screen/DuaRequestScreen';
import DuaRequestView from './screens/dua_request_screen/DuaRequestView';
import NotificationsScreen from './screens/notifications_screen/NotificationsScreen';

function App() {
	return (
		//BEM
		<Router>
			<AuthProvider>
				<PostsProvider>
					<SidebarProvider>
						<Switch>
							<PrivateRoute exact path="/" component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/signup" component={SignUp} />
							<Route path="/forgotPassword" component={ForgotPassword} />
							<Route path="/Articles" component={ArticlesScreen} />
							<Route path="/Home" component={Home} />
							<Route path="/Dua Requests" component={DuaRequestScreen} />
							<Route path="/Notifications" component={NotificationsScreen} />
						</Switch>
					</SidebarProvider>
				</PostsProvider>
			</AuthProvider>
		</Router>
	);
}

export default App;
