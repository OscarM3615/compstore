import { useState } from 'react';
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
import SearchContext from 'shared/context/Search';

const App = () => {
	const [navbarValue, setNavbarValue] = useState<string>('');
	const [search, setSearch] = useState<string>('');

	const navbarOnSearch = () => {
		setSearch(navbarValue);
	};

	return (
		<Router>
			<NavigationBar
				search={navbarValue}
				setSearch={setNavbarValue}
				onSearch={navbarOnSearch}
			/>

			<SearchContext.Provider value={search}>
				<Switch>
					<Route exact path="/" component={HomeView} />
					<Route exact path="/categories" component={CategoriesView} />

					<Route path="/categories/:id" component={CategoryView} />
					<Route path="/products/:id" component={ProductView} />

					<Route path="/not-found" component={NotFoundView} />
					<Route path="*" component={() => <Redirect to="/not-found" />} />
				</Switch>
			</SearchContext.Provider>
		</Router>
	);
};

export default App;
