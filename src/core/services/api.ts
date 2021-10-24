import products from 'core/mocks/products';
import categories from 'core/mocks/categories';
import type Product from 'shared/models/product';
import type Category from 'shared/models/category';

class ApiService {
	async getProducts(): Promise<Product[]> {
		return products;
	}

	async getProduct(id: number): Promise<Product> {
		const product = products.find((product) => product.id === id);

		if (!product) throw new Error(`Product with ID ${id} not found.`);
		return product;
	}

	async getProductsInCategory(categoryId: number): Promise<Product[]> {
		return products.filter((product) => product.category.id === categoryId);
	}

	async getCategories(): Promise<Category[]> {
		return categories;
	}

	async getCategory(id: number): Promise<Category> {
		const category = categories.find((category) => category.id === id);

		if (!category) throw new Error(`Category with ID ${id} not found.`);
		return category;
	}

	async createOrder(
		product: Product,
		amount: number,
		email: string
	): Promise<void> {
		console.log({ product, amount, total: product.price * amount, email });
	}
}

export default new ApiService();
