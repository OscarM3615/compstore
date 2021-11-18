import { useState, useEffect, useContext } from 'react';
import ProductCard from 'shared/components/ProductCard';
import Title from 'shared/components/Title';
import Loading from 'shared/components/Loading';
import SearchContext from 'shared/context/Search';
import useTitle from 'shared/hooks/useTitle';
import api from 'core/services/api';
import type Product from 'shared/models/product';

const HomeView = () => {
	const search = useContext(SearchContext);
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setLoading(true);

		if (search)
			api.searchProducts(search).then((data) => {
				if (data) setProducts(data);
				else setProducts([]);
			});
		else api.getProducts().then((data) => setProducts(data));

		setLoading(false);
	}, [search]);

	useTitle();

	return (
		<section className="py-5">
			<div className="container">
				{!loading ? (
					<>
						<Title
							title="Productos disponibles"
							subtitle={search ? `Búsqueda: ${search}` : undefined}
						/>

						<div className="row">
							{products.map((product) => (
								<div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
									<ProductCard product={product} />
								</div>
							))}
						</div>
					</>
				) : (
					<Loading />
				)}
			</div>
		</section>
	);
};

export default HomeView;
