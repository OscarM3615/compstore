import type Category from './category';

export default interface Product {
	id: number;
	name: string;
	description?: string;
	price: number;
	imageUrl: string;
	category: Category;
}
