import type Product from 'shared/models/product';

type PropType = {
	product: Product;
};

const ProductDetails = ({ product }: PropType) => {
	return (
		<div className="card">
			<div className="card-body">
				<div className="row">
					<div className="col-lg-8">
						<img
							className="img-fluid rounded-3"
							src={product.imageUrl}
							alt={product.name}
						/>
					</div>
					<div className="col-lg-4 px-4 mt-3 mt-lg-0">
						<p className="h5 pb-2 border-bottom">Detalles del producto</p>

						<p className="card-text">{product.description}</p>

						<div className="border-top border-bottom pt-4 pb-2 mb-4">
							<div className="d-flex justify-content-between">
								<p className="fw-bold">Categoría</p>
								<p>{product.category.name}</p>
							</div>
							<div className="d-flex justify-content-between">
								<p className="fw-bold">Precio</p>
								<p>$ {product.price}</p>
							</div>
						</div>

						<button className="btn btn-primary w-100">
							<i className="bi bi-bag-check"></i> Ordenar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
