import Modal from 'react-bootstrap/Modal';

type PropType = {
	show: boolean;
	setShow: (value: boolean) => void;
	title?: string;
	message: string;
};

const MessageBox = ({ show, setShow, title, message }: PropType) => {
	const closeModal = () => setShow(false);

	return (
		<Modal show={show} centered onHide={closeModal}>
			{title && (
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
			)}

			<Modal.Body>{message}</Modal.Body>

			<Modal.Footer>
				<button className="btn btn-primary" onClick={closeModal}>
					Aceptar
				</button>
			</Modal.Footer>
		</Modal>
	);
};

export default MessageBox;
