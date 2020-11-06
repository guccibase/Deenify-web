import { AuthProvider } from './contexts/AuthContext';
import Home from './screens/homeScreen/Home';
import SignUp from './screens/signup/SignUp';
import Login from './screens/signIN/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		//BEM
		<Router>
			<AuthProvider>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
