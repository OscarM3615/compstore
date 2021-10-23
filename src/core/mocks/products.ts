import categories from 'core/mocks/categories';
import type Product from 'shared/models/product';

const products: Product[] = [
	{
		id: 1,
		name: 'Producto 1',
		price: 50,
		category: categories[0],
		imageUrl:
			'https://spy.com/wp-content/uploads/2020/12/CleanClipping-Recovered-10.png?w=1000&h=750&crop=1'
	},
	{
		id: 2,
		name: 'Product 2',
		price: 100,
		category: categories[0],
		imageUrl:
			'https://spy.com/wp-content/uploads/2020/12/CleanClipping-Recovered-10.png?w=1000&h=750&crop=1'
	},
	{
		id: 3,
		name: 'Product 3',
		price: 25,
		category: categories[1],
		imageUrl:
			'https://spy.com/wp-content/uploads/2020/12/CleanClipping-Recovered-10.png?w=1000&h=750&crop=1'
	}
];

export default products;
