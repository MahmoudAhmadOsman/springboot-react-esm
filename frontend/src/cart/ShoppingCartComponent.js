import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RatingComponent from "../rating/RatingComponent";
import { toast } from "react-toastify";
import OrderService from "../service/OrderService";

const ShoppingCartComponent = () => {
	const navigate = useNavigate();
	const [cart, setCart] = useState(() => {
		return JSON.parse(localStorage.getItem("cartItems")) || [];
	});

	const handleRemoveCartItem = (item) => {
		const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
		setCart(updatedCart);
		toast.warn("Cart item has been removed!!", {
			position: "bottom-right",
			autoClose: 2000,
		});
	};

	const handlePlaceOrder = () => {
		const orderData = {
			totalPrice: calculateTotalPrice(),
			shippingCost:
				calculateTotalPrice() > 160 ? 0 : calculateTotalPrice() * 0.06 + 3.99,
		};

		// Iterate over each cart item and send a separate API request
		cart.forEach((item) => {
			const itemData = {
				id: item.id,
				name: item.name,
				image: item.image,
				description: item.description,
				price: item.price,
				productRating: item.productRating,
			};

			OrderService.saveOrder(itemData)
				.then((res) => {
					toast.success(`Order is placed successfully!!`, {
						position: "bottom-right",
						autoClose: 3000,
					});
					setCart([]);
					setTimeout(() => {
						navigate("/orders");
						window.location.reload();
					}, 200);
				})
				.catch((error) => {
					toast.warn(`An Error ${error} has occured!!`, {
						position: "top-right",
						autoClose: 3000,
					});
					console.log(error.message);
				});
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
		<section className="container mt-3">
			<>
				{cart.length === 0 ? (
					<div className="row">
						<div className="col-md-6 offset-md-2">
							<h1 className="text-danger">Your cart is empty!</h1>
							<Link className="h6" to={"/products"}>
								Continue Shopping
							</Link>
						</div>
					</div>
				) : (
					<>
						<h1 className="text-success"> Cart Items</h1>
						<div className="float-end" style={{ marginBottom: "10px" }}>
							<Link className="float-end btn btn-outline-info" to={"/products"}>
								Back to shopping
							</Link>
						</div>
						<hr />
						<br />
						<div className="row mt-3">
							<div className="col">
								{/* Start of Table */}
								<div className="table-responsive">
									<table className="table table-hover">
										<thead>
											<tr>
												{/* <th>Product ID</th>
												<th>Product Image & Description</th>
												<th>Product Name</th>
												<th>Price</th>
												<th>Rating</th>
													<th>Actions</th> */}
												{/* <th></th> */}
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											{cart.map((item) => (
												<tr key={item.id}>
													{/* <td>{item.id}</td> */}
													<td>
														<Link to={`/view-product/${item.id}`}>
															<img
																src={item.image}
																alt={item.name}
																className="img-thumbnail bg-dark"
																style={{ width: "80px", height: "80px" }}
															/>{" "}
														</Link>
														<p className="cart-text text-muted mt-3">
															<b className="h6">Product Description</b>
															<br />
															{item.description.slice(0, 50)}...
														</p>
													</td>
													<td>
														<h4>{item.name}</h4>
													</td>
													<td>
														<h4>${item.price}</h4>
													</td>
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
											<table className="table table-hover table-secondary">
												<thead>
													<tr>
														<th>Total Price</th>
														<th>Shipping </th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="text-danger fw-bold">
															{" "}
															${calculateTotalPrice()}{" "}
														</td>
														<td>
															{calculateTotalPrice() > 160 ? (
																<span className="text-success">FREE</span>
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
						<div className="float-end">
							<button
								className="btn btn-outline-warning btn-lg fw-bold"
								onClick={handlePlaceOrder}
							>
								PROCEED TO CHECKOUT
							</button>
						</div>
					</>
				)}
			</>
		</section>
	);
};

export default ShoppingCartComponent;
