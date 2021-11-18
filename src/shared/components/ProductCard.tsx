import { Link } from 'react-router-dom';
import type Product from 'shared/models/product';

type PropType = {
	product: Product;
};

const ProductCard = ({ product }: PropType) => {
	return (
		<div className="card h-100">
			<div className="card-body">
				<div className="ratio ratio-4x3 mb-3">
					<img
						className="card-img-top object-fit-contain"
						src={product.imageUrl}
						alt={product.name}
					/>
				</div>
				<p className="h5 card-title">{product.name}</p>
				<p className="h6 card-subtitle text-success">
					$ {product.price.toLocaleString()}
				</p>
			</div>
			<div className="card-footer d-flex align-items-center justify-content-between">
				<Link
					to={`/categories/${product.category}`}
					className="badge bg-secondary text-decoration-none text-light"
				>
					{product.categoryName}
				</Link>

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
