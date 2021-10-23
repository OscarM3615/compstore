import { Link } from 'react-router-dom';
import Title from 'shared/components/Title';
import useCategories from 'shared/hooks/useCategories';

const CategoriesView = () => {
	const categories = useCategories();

	return (
		<section className="py-5">
			<div className="container px-5">
				<Title title="Categorías" />

				<div className="card">
					<ul className="list-group list-group-flush">
						{categories.map((category) => (
							<li key={category.id} className="list-group-item">
								<Link
									to={`/categories/${category.id}`}
									className="d-flex justify-content-between text-decoration-none link-dark"
								>
									{category.name} <i className="bi bi-chevron-right"></i>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default CategoriesView;
