import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import RatingComponent from "../rating/RatingComponent";
import { toast } from "react-toastify";

const ShoppingCartComponent = () => {
	const [cart, setCart] = useState(() => {
		return JSON.parse(localStorage.getItem("cartItems")) || [];
	});
	const handleRemoveCartItem = (item) => {
		const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
		setCart(updatedCart);
		toast.warn("Cart item has been removed!!", {
			position: "top-right",
		});
	};

	//get localStorage key
	useEffect(() => {
		const data = localStorage.getItem("cartItems");
		if (data) {
			setCart(JSON.parse(data));
		}
	}, []);

	//set localStorage key
	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cart));
	}, [cart]);

	//Calculate total price
	const calculateTotalPrice = () => {
		let totalPrice = 0;
		for (const item of cart) {
			totalPrice += item.price;
		}
		return totalPrice;
	};
	return (
		<section className="container">
			<>
				{cart.length === 0 ? (
					<div className="row mt-3">
						<div className="col-md-6 offset-md-2">
							<h1 className="text-danger">Your cart is empty!</h1>
							<Link className="h6" to={"/products"}>
								Continue Shopping
							</Link>
						</div>
					</div>
				) : (
					<>
						<h1 className="text-success mt-3"> Cart Items</h1>
						<Link className="float-end btn btn-outline-info" to={"/products"}>
							Back to shopping
						</Link>{" "}
						<hr /> <br />
						<div className="row mt-3">
							{/* Start of Table */}
							<div className="col">
								<div className="table-responsive">
									<table className="table table-hover">
										<thead>
											<tr>
												<th>Product ID</th>
												<th>Product Image & Description</th>
												<th>Product Name</th>
												<th>Price</th>
												<th>Rating</th>
												<th>Actions</th>
											</tr>
										</thead>
										<tbody>
											{cart.map((item) => (
												<tr key={item.id}>
													<td>{item.id}</td>
													<td>
														<img
															src={item.image}
															alt={item.name}
															className="rounded-circle bg-dark"
															style={{ width: "80px", height: "80px" }}
														/>
														<p className="card-text">
															{item.description.slice(0, 40)}...
														</p>
													</td>
													<td>{item.name}</td>
													<td>${item.price}</td>
													<td>
														<p className="text-warning fw-bold">
															<RatingComponent
																rating={item.productRating}
															></RatingComponent>
														</p>
													</td>
													<td>
														<button
															title="REMOVE"
															onClick={() => handleRemoveCartItem(item)}
															className="btn btn-outline-danger"
														>
															<i className="fa fa-trash"></i>
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
									<div className="float-end">
										<div className="table-responsive">
											<table class="table table-hover">
												<thead>
													<tr>
														<th>Total Price</th>
														<th>Shipping </th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td> ${calculateTotalPrice()} </td>
														<td>
															{calculateTotalPrice() > 160 ? (
																<span>FREE</span>
															) : (
																<span>
																	${calculateTotalPrice() * 0.06 + 3.99}
																</span>
															)}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							{/* End of Table */}
						</div>
					</>
				)}
			</>
		</section>
	);
};

export default ShoppingCartComponent;
