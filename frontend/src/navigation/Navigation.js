import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
	const isLogin = true;

	return (
		<div>
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<div className="container-fluid ">
					<Link className="navbar-brand " to="/">
						ESS SYSTEM
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
							<li className="nav-item">
								<Link className="nav-link" to="/employees">
									Employees
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/list-patient">
									Patients
								</Link>
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
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About
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
