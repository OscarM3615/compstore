import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ProductCard from 'shared/components/ProductCard';
import Title from 'shared/components/Title';
import Loading from 'shared/components/Loading';
import useTitle from 'shared/hooks/useTitle';
import api from 'core/services/api';
import type Product from 'shared/models/product';
import type Category from 'shared/models/category';

type ParamType = { id: string };

const CategoryView = () => {
	const { id: categoryId } = useParams<ParamType>();
	const [products, setProducts] = useState<Product[]>([]);
	const [category, setCategory] = useState<Category>();

	const history = useHistory();

	useEffect(() => {
		api
			.getCategory(+categoryId)
			.then((data) => setCategory(data))
			.catch(() => {
				history.replace('/not-found');
			});

		api.getProductsInCategory(+categoryId).then((data) => setProducts(data));
	}, [categoryId, history]);

	useTitle(category?.name);

	return (
		<section className="py-5">
			<div className="container px-5">
				{category ? (
					<>
						<Title title={category.name} />

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

export default CategoryView;
