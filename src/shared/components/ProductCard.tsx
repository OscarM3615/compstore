import { Link } from 'react-router-dom';
import type Product from 'shared/models/product';

type PropType = {
	product: Product;
};

const ProductCard = ({ product }: PropType) => {
	return (
		<div className="card h-100">
			<img className="card-img-top" src={product.imageUrl} alt={product.name} />
			<div className="card-body">
				<p className="h5 card-title">{product.name}</p>
				<p className="h6 card-subtitle text-success">$ {product.price}</p>
			</div>
			<div className="card-footer d-flex align-items-center justify-content-between">
				<span className="badge bg-secondary">{product.category.name}</span>

				<Link
					to={`/products/${product.id}`}
					className="btn btn-outline-primary"
				>
					Detalles <i className="bi bi-chevron-right"></i>
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
