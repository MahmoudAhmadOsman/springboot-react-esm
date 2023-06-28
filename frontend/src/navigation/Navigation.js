import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./NavigationStyle.css";
import OrderService from "../service/OrderService";
import { toast } from "react-toastify";

const  Navigation = () => {
	const isLogin = false;

	const [cart, setCart] = useState(() => {
		return JSON.parse(localStorage.getItem("cartItems")) || [];
	});
	const [orders, setOrders] = useState([]);

	const [cartCount, setCartCount] = useState(cart.length);

	const getOrders = async () => {
		await OrderService.getAllOrders()
			.then((res) => {
				setOrders(res.data);
			})
			.catch((error) => {
				toast.warn(`An Error ${error} has occured while cancelling order!!`, {
					position: "top-right",
				});
				console.log(error.message);
			});
	};

	useEffect(() => {
		setCartCount(cart.length);
	}, [cart]);

	// console.log(cart[0].name);

	useEffect(() => {
		getOrders();
	}, [orders]);

	return (
		<div className="site_navigation">
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
									{cartCount > 0 ? (
										<li>
											<Link className="dropdown-item" to="/shopping-cart">
												Shopping Cart
											</Link>
										</li>
									) : (
										""
									)}
									{orders.length > 0 ? (
										<li>
											<Link className="dropdown-item" to="/orders">
												Orders
											</Link>
										</li>
									) : (
										""
									)}
								</ul>
							</li>

							{cartCount > 0 ? (
								<li className="nav-item">
									<Link className="nav-link" to="/shopping-cart">
										<div className="nav-shopping-cart">
											<button
												type="button"
												className="btn btn-dark position-relative"
											>
												<i
													className="fa fa-shopping-cart "
													aria-hidden="true"
												></i>
												&nbsp;
												<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
													{cartCount}
												</span>
											</button>
										</div>
									</Link>
								</li>
							) : (
								""
							)}

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

export default Navigation;
