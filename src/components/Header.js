import React from 'react';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
			<div className="container">
				<h1>CRUD React</h1>
			</div>

			<a
				className="btn btn-danger nuevo-post d-block d-md-inline-block"
				href="/productos/nuevo"
			>
				Agregar Producto
			</a>
		</nav>
	);
};

export default Header;
