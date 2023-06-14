import React, { useEffect, useState } from "react";
import OrderService from "../service/OrderService";
import Loading from "../utils/Loading";
import RatingComponent from "../rating/RatingComponent";

const OrderListComponent = () => {
	const productImgHolder = "https://source.unsplash.com/136x136";
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);

	const getOrders = async () => {
		await OrderService.getAllOrders()
			.then((res) => {
				setOrders(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
		// console.log(orders);
	};

	useEffect(() => {
		getOrders();
	}, []);

	return (
		<section className="order-list">
			<div className="container">
				{loading ? (
					<div className="loading">
						<Loading />
					</div>
				) : (
					<>
						<h2 className="text-success">Order List</h2> <hr />
						<div className="row">
							<div className="col">
								<div className="table-responsive">
									<table className="table table-hover">
										<thead>
											<tr>
												<th>Order ID</th>
												<th>Order Image</th>
												<th> Name</th>
												<th> Price</th>
												<th> Rating</th>
												<th> Order Status</th>
												<th>Description</th>
												<th> Rating</th>
												<th> Order Date</th>
											</tr>
										</thead>
										<tbody>
											{orders.map((order) => (
												<tr key={order.id}>
													<td>{order.id}</td>
													<td>
														<img
															src={
																order.image
																	? `http://localhost:8080/${order.image}`
																	: productImgHolder + "?/" + order.name
															}
															className="card-img-top img-fluid"
															alt={order.name}
															style={{ width: 100 }}
														/>
													</td>
													<td>{order.name}</td>
													<td>${order.price}</td>
													<td>{order.productRating}</td>
													<td>{order.orderStatus}</td>
													<td>{order.description.slice(0, 30)}...</td>
													<td className="text-warning fw-bold">
														<RatingComponent
															rating={order.productRating}
														></RatingComponent>
													</td>
													<td>{order.orderDate}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default OrderListComponent;
