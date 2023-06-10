import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
	const isLogin = false;

	return (
		<div>
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<div className="container-fluid ">
					<Link className="navbar-brand " to="/">
						ESS SYSTEMS
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							{/* <li className="nav-item">
								<Link className="nav-link" to="/employees">
									Employees
								</Link>
							</li> */}
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
								>
									Employees
								</Link>
								<ul className="dropdown-menu">
									<li>
										<Link className="dropdown-item" to="/employees">
											Employee List
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to="/employees/add-employee"
										>
											Add Employee
										</Link>
									</li>
								</ul>
							</li>

							{/* <li className="nav-item">
								<Link className="nav-link" to="/patients">
									Patients
								</Link>
							</li> */}

							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
								>
									Patients
								</Link>
								<ul className="dropdown-menu">
									<li>
										<Link className="dropdown-item" to="/patients">
											Patients List
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="/patient/add-patient">
											Add Patients
										</Link>
									</li>
								</ul>
							</li>

							<li className="nav-item">
								{isLogin ? (
									<Link className="nav-link" to="/patient/add-patient">
										Register New Patient
									</Link>
								) : (
									<span></span>
								)}
							</li>
							{/* Product Dropdown */}

							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
								>
									Products
								</Link>
								<ul className="dropdown-menu">
									<li>
										<Link className="dropdown-item" to="/products">
											Products List
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="/add-product">
											Add Product
										</Link>
									</li>
								</ul>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/about">
									about
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/register">
									Register
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
