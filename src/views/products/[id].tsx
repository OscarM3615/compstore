import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Title from 'shared/components/Title';
import ProductDetails from 'components/products/ProductDetails';
import Loading from 'shared/components/Loading';
import api from 'core/services/api';
import type Product from 'shared/models/product';

type ParamType = { id: string };

const ProductView = () => {
	const { id: productId } = useParams<ParamType>();
	const [product, setProduct] = useState<Product>();

	const history = useHistory();

	useEffect(() => {
		api
			.getProduct(+productId)
			.then((data) => setProduct(data))
			.catch(() => {
				history.replace('/not-found');
			});
	}, [productId, history]);

	return (
		<section className="py-4">
			<div className="container px-5">
				{product ? (
					<>
						<Title title={product.name} />
						<ProductDetails product={product} />
					</>
				) : (
					<Loading />
				)}
			</div>
		</section>
	);
};

export default ProductView;
