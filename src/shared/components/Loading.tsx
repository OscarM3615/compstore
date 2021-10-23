import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
	return (
		<div className="d-flex justify-content-center">
			<Spinner animation="border" variant="primary" role="status">
				<span className="visually-hidden">Cargando...</span>
			</Spinner>
		</div>
	);
};

export default Loading;
