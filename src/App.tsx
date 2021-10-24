import { useState, FormEvent } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import HomeView from 'views/index';
import CategoriesView from 'views/categories/index';
import CategoryView from 'views/categories/[id]';
import ProductView from 'views/products/[id]';
import NotFoundView from 'views/404';

import NavigationBar from 'shared/components/NavigationBar';

const App = () => {
	const [navbarValue, setNavbarValue] = useState<string>('');
	const [search, setSearch] = useState<string>('');

	const navbarOnSearch = (event: FormEvent) => {
		event.preventDefault();
		setSearch(navbarValue);
	};

	return (
		<Router>
			<NavigationBar
				search={navbarValue}
				setSearch={setNavbarValue}
				onSearch={navbarOnSearch}
			/>

			<Switch>
				<Route exact path="/" component={() => <HomeView search={search} />} />
				<Route exact path="/categories" component={CategoriesView} />

				<Route path="/categories/:id" component={CategoryView} />
				<Route path="/products/:id" component={ProductView} />

				<Route path="not-found" component={NotFoundView} />
				<Route path="*" component={() => <Redirect to="/not-found" />} />
			</Switch>
		</Router>
	);
};

export default App;
