import { useState, useEffect } from 'react';
import ProductCard from 'components/home/ProductCard';
import api from 'core/services/api';
import type Product from 'shared/models/product';

const HomeView = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		api.getProducts().then((data) => setProducts(data));
	}, []);

	return (
		<section className="py-5">
			<div className="container px-5">
				<p className="h2 text-center pb-2 border-bottom">
					Productos disponibles
				</p>

				<div className="row mt-4">
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
