import { useState, useEffect } from 'react';
import ProductCard from 'shared/components/ProductCard';
import Title from 'shared/components/Title';
import useTitle from 'shared/hooks/useTitle';
import api from 'core/services/api';
import type Product from 'shared/models/product';

const HomeView = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		api.getProducts().then((data) => setProducts(data));
	}, []);

	useTitle();

	return (
		<section className="py-5">
			<div className="container">
				<Title title="Productos disponibles" />

				<div className="row">
					{products.map((product) => (
						<div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
							<ProductCard product={product} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeView;
