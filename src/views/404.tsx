import useTitle from 'shared/hooks/useTitle';

export const NotFoundView = () => {
	useTitle('Página no encontrada');

	return <div>not found page</div>;
};

export default NotFoundView;
