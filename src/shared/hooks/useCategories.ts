import { useState, useEffect } from 'react';
import api from 'core/services/api';
import type Category from 'shared/models/category';

const useCategories = (): Category[] => {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		api.getCategories().then((data) => setCategories(data));
	}, []);

	return categories;
};

export default useCategories;
