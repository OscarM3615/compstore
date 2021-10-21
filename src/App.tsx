import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeView from 'views/index';

import NavigationBar from 'shared/components/NavigationBar';

const App = () => {
	return (
		<Router>
			<NavigationBar />

			<Switch>
				<Route exact path="" component={HomeView} />
			</Switch>
		</Router>
	);
};

export default App;
