import { useReducer, FormEvent } from 'react';
import Modal from 'react-bootstrap/Modal';
import { initialState, reducer } from 'core/reducers/OrderModal';
import api from 'core/services/api';
import type Product from 'shared/models/product';

type PropType = {
	show: boolean;
	product: Product;
	onClose: () => void;
	onSuccess: () => void;
};

const OrderModal = ({ show, product, onClose, onSuccess }: PropType) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const submitOrder = (event: FormEvent) => {
		event.preventDefault();
		dispatch({ type: 'toggle_loading' });

		api
			.createOrder(product, state.count, state.email)
			.then(() => {
				dispatch({ type: 'toggle_loading' });
				onSuccess();
				onClose();
			})
			.catch((err) => {
				alert('Ocurrió un error en tu compra.');
				console.error(err);
				dispatch({ type: 'toggle_loading' });
			});
	};

	return (
		<Modal show={show} centered onHide={onClose}>
			<form onSubmit={submitOrder}>
				<Modal.Header closeButton>
					<Modal.Title>Realizar orden</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div className="row mb-3">
						<label htmlFor="email" className="col-sm-4 col-form-label">
							Correo electrónico
						</label>
						<div className="col-sm-8">
							<input
								type="email"
								id="email"
								className="form-control"
								value={state.email}
								onChange={(e) =>
									dispatch({ type: 'set_email', value: e.target.value })
								}
								required
							/>
						</div>
						<div className="form-text text-muted">
							Se utilizará como medio de contacto para finalizar la venta.
						</div>
					</div>

					<div className="row mb-3">
						<label htmlFor="amount" className="col-sm-4 col-form-label">
							Cantidad
						</label>
						<div className="col-sm-8">
							<div className="input-group">
								<input
									id="amount"
									className="form-control"
									value={state.count}
									readOnly
								/>

								<button
									type="button"
									className="btn btn-outline-primary"
									onClick={() => dispatch({ type: 'decr_count' })}
								>
									-
								</button>
								<button
									type="button"
									className="btn btn-outline-primary"
									onClick={() => dispatch({ type: 'incr_count' })}
								>
									+
								</button>
							</div>
						</div>
					</div>

					<div className="row mb-3">
						<label htmlFor="price" className="col-sm-4 col-form-label">
							Precio
						</label>
						<div className="col-sm-8">
							<div className="input-group">
								<span className="input-group-text">$</span>
								<input
									type="text"
									id="price"
									className="form-control"
									value={product.price * state.count}
									readOnly
								/>
							</div>
						</div>
					</div>
				</Modal.Body>

				<Modal.Footer>
					<button
						type="button"
						className="btn btn-outline-secondary w-25"
						onClick={onClose}
					>
						Cancelar
					</button>
					<button
						type="submit"
						className="btn btn-primary w-25"
						disabled={state.loading}
					>
						{state.loading ? (
							<>
								<span
									className="spinner-border spinner-border-sm"
									role="status"
									aria-hidden="true"
								></span>
							</>
						) : (
							'Ordenar'
						)}
					</button>
				</Modal.Footer>
			</form>
		</Modal>
	);
};

export default OrderModal;
