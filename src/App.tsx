import { FormEvent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeView from 'views/index';
import CategoriesView from 'views/categories/index';
import CategoryView from 'views/categories/[id]';
import ProductView from 'views/products/[id]';
import NotFoundView from 'views/404';

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
				<Route exact path="/categories" component={CategoriesView} />

				<Route path="/categories/:id" component={CategoryView} />
				<Route path="/products/:id" component={ProductView} />

				<Route path="*" component={NotFoundView} />
			</Switch>
		</Router>
	);
};

export default App;
