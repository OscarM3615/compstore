import { FormEvent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeView from 'views/index';
import CategoriesView from 'views/categories';

import NavigationBar from 'shared/components/NavigationBar';

const navbarOnSearch = (event: FormEvent) => {
	event.preventDefault();
};

const App = () => {
	return (
		<Router>
			<NavigationBar onSearch={navbarOnSearch} />

			<Switch>
				<Route exact path="/" component={HomeView} />
				<Route path="/categories" component={CategoriesView} />
			</Switch>
		</Router>
	);
};

export default App;
