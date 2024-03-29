import React, { useEffect, useState } from "react";
import OrderService from "../service/OrderService";
import Loading from "../utils/Loading";
import RatingComponent from "../rating/RatingComponent";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OrderListComponent = () => {
	const navigate = useNavigate();
	const productImgHolder = "https://source.unsplash.com/136x136";
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);

	const getOrders = async () => {
		await OrderService.getAllOrders()
			.then((res) => {
				setOrders(res.data);
				setLoading(false);
			})
			.catch((error) => {
				toast.warn(`An Error ${error} has occured!!`, {
					position: "top-right",
					autoClose: 3000,
				});
				console.log(error.message);
			});
	};

	//Calculate total price
	const calculateTotalPrice = (orderItems) => {
		let totalPrice = 0;
		for (const item of orderItems) {
			totalPrice += item.price;
		}
		return totalPrice;
	};

	const deleteOrder = async (e, id) => {
		e.preventDefault();
		if (window.confirm("Are you sure, you want to cancel this order?")) {
			await OrderService.deleteOrder(id)

				.then(
					setTimeout(() => {
						toast.success(`Order delete successfully!!`, {
							position: "bottom-right",
							autoClose: 3000,
						});
						navigate("/orders");
					}, 200)
				)
				.catch((error) => {
					toast.warn(`An Error ${error} has occured while cancelling order!!`, {
						position: "top-right",
					});
					console.log(error.message);
				});
		} else {
			return;
		}
	};

	useEffect(() => {
		getOrders();
	}, [orders]);

	return (
		<section className="order-list">
			<div className="container mt-3">
				{loading ? (
					<div className="loading">
						<Loading />
					</div>
				) : (
					<>
						{orders.length < 1 ? (
							<div className="alert alert-warning mt3 text-center">
								<h4>No Order Found!</h4>
							</div>
						) : (
							<div>
								<h2 className="text-success">Your Order List</h2> <hr />
								<div className="row">
									<div className="col">
										<div className="table-responsive">
											<table className="table table-hover">
												<thead>
													<tr>
														<th>Order ID</th>
														<th>Product Image</th>
														<th> Product Name</th>
														<th>Description</th>
														<th> Price</th>
														<th> Order Status</th>
														<th> Order Date</th>
													</tr>
												</thead>
												<tbody>
													{orders.map((order) => (
														<tr key={order.id}>
															<td>{order.id}</td>
															{/* <td>
																<img
																	src={
																		order.image
																			? `http://localhost:8080/${order.image}`
																			: productImgHolder + "?/" + order.name
																	}
																	className="card-img-top img-fluid"
																	alt={order.name}
																	style={{ width: "80px", height: "80px" }}
																/>
															</td> */}
															<td>
																<img
																	src={order.image}
																	className="img-fluid img-thumbnail bg-dark"
																	alt={order.name}
																	style={{ width: "80px", height: "80px" }}
																/>
															</td>
															<td>
																{order.name}
																<span className="text-warning fw-bold">
																	<RatingComponent
																		rating={order.productRating}
																	></RatingComponent>
																</span>
															</td>

															<td>{order.description}</td>
															<td className="text-danger fw-bold">
																${order.price}
															</td>

															<td className="text-success">
																{order.orderStatus === "PROCESSING" ? (
																	<span className="btn btn-success btn-sm">
																		{order.orderStatus}
																	</span>
																) : (
																	<span className="border-bottom border-success border-1">
																		{order.orderStatus}
																	</span>
																)}
															</td>

															<td>{order.orderDate}</td>

															<td>
																<button
																	onClick={(e) => deleteOrder(e, order.id)}
																	className="btn btn-outline-danger btn-sm"
																>
																	CANCEL
																</button>
															</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>
								</div>
								{/* Start of display order price total */}
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
													<td className="text-danger fw-bold">
														${calculateTotalPrice(orders)}
													</td>
													<td>
														{calculateTotalPrice(orders).toFixed(2) > 160 ? (
															<span className="text-success">FREE</span>
														) : (
															<span className="text-danger fw-bold">
																$
																{calculateTotalPrice(orders).toFixed(2) * 0.06 +
																	3.99}
															</span>
														)}
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								{/* End of display order price total */}
							</div>
						)}
					</>
				)}
			</div>
		</section>
	);
};

export default OrderListComponent;
