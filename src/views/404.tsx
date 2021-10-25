import Title from 'shared/components/Title';
import useTitle from 'shared/hooks/useTitle';

const NotFoundView = () => {
	useTitle('Página no encontrada');

	return (
		<section className="py-5">
			<div className="container">
				<Title title="Página no encontrada" />

				<div className="text-center">
					<p className="h1 text-danger">
						<i className="bi bi-exclamation-diamond-fill"></i>
					</p>
					<p className="lead fw-normal text-muted">
						Es posible que la página que buscas haya sido eliminada, movida de
						lugar o que la dirección no exista.
					</p>
				</div>
			</div>
		</section>
	);
};

export default NotFoundView;
