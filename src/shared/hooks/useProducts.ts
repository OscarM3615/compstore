import { useState, useEffect } from 'react';
import api from 'core/services/api';
import type Product from 'shared/models/product';

const useProducts = (): Product[] => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		api.getProducts().then((data) => setProducts(data));
	}, []);

	return products;
};

export default useProducts;
