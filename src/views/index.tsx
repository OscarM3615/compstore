import ProductCard from 'components/home/ProductCard';
import Title from 'shared/components/Title';
import useProducts from 'shared/hooks/useProducts';

const HomeView = () => {
	const products = useProducts();

	return (
		<section className="py-5">
			<div className="container px-5">
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
