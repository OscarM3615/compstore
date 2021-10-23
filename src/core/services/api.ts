import products from 'core/mocks/products';
import categories from 'core/mocks/categories';
import type Product from 'shared/models/product';
import type Category from 'shared/models/category';

class ApiService {
	async getProducts(): Promise<Product[]> {
		return products;
	}

	async getCategories(): Promise<Category[]> {
		return categories;
	}
}

export default new ApiService();
