import axios, { AxiosInstance } from 'axios';
import { formStringify } from 'core/utils/http';
import type Product from 'shared/models/product';
import type Category from 'shared/models/category';

class ApiService {
	private api: AxiosInstance;

	constructor() {
		this.api = axios.create({
			baseURL: 'https://compstore2.000webhostapp.com',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json'
			}
		});
	}

	async getProducts(): Promise<Product[]> {
		const response = await this.api.get(`/products.php`);
		return response.data;
	}

	async getProduct(id: number): Promise<Product> {
		const response = await this.api.post(
			`/products.php`,
			formStringify({ id })
		);
		return response.data;
	}

	async getProductsInCategory(categoryId: number): Promise<Product[]> {
		const response = await this.api.post(
			`/products.php`,
			formStringify({ categoryId })
		);
		return response.data;
	}

	async searchProducts(search: string): Promise<Product[]> {
		const response = await this.api.post(
			`/products.php`,
			formStringify({ search })
		);
		return response.data;
	}

	async getCategories(): Promise<Category[]> {
		const response = await this.api.post(`/categories.php`);
		return response.data;
	}

	async getCategory(id: number): Promise<Category> {
		const response = await this.api.post(
			`/categories.php`,
			formStringify({ id })
		);
		return response.data;
	}

	async createOrder(
		product: Product,
		amount: number,
		email: string
	): Promise<void> {
		await new Promise((r) => setTimeout(r, 1000));

		console.log({ product, amount, total: product.price * amount, email });
	}
}

export default new ApiService();
