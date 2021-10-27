import { FormEventHandler, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import config from 'shared/config';

type PropType = {
	search: string;
	setSearch: (value: string) => void;
	onSearch?: FormEventHandler<HTMLFormElement>;
};

const NavigationBar = ({ search, setSearch, onSearch }: PropType) => {
	const location = useLocation();

	return (
		<Navbar
			bg="primary"
			variant="dark"
			expand="lg"
			sticky="top"
			collapseOnSelect
		>
			<Container fluid>
				<Navbar.Brand as={Link} to="/">
					{config.appName}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarCollapse" />
				<Navbar.Collapse id="navbarCollapse">
					<form
						className="d-flex mt-2 mt-lg-0 px-0 px-lg-4 w-100"
						onSubmit={onSearch}
					>
						<div className="input-group">
							<input
								type="text"
								className="form-control border-light"
								placeholder="Buscar productos"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>

							<button className="btn btn-outline-light">
								<i className="bi bi-search"></i>
							</button>
						</div>
					</form>
					<Nav className="ms-auto" activeKey={location.pathname}>
						<NavLink href="/">Inicio</NavLink>
						<NavLink href="/categories">Categorías</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
	return (
		<Nav.Link as={Link} to={href} href={href}>
			{children}
		</Nav.Link>
	);
};

export default NavigationBar;
