import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../service/ProductService";
import OrderService from "../service/OrderService";

const CartListComponent = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [message, setMessage] = useState(false);

	const [product, setProduct] = useState({
		name: "",
		image: "",
		price: "",
		description: "",
	});
	const productImgHolder = `https://source.unsplash.com/1600x900/?office/?${product.name}`;

	const { name, image, price, description } = product;

	// const HandleSubmit = (e) => {
	// 	setProduct({ ...product, [e.target.name]: e.target.value });
	// };

	const saveOrder = async (e) => {
		e.preventDefault();

		if (name === "" || image === "" || price === "" || description === "") {
			alert("please select an order");
		} else {
			console.log("Order Product: ", product);

			await OrderService.saveOrder(product)
				.then((res) => {
					setMessage(true);
					setTimeout(() => {
						navigate("/orders");
					}, 3000);
					console.log("Product Rest Data: ", res.data);
				})
				.catch((e) => {
					console.log(e.message);
				});
		}
	};

	const tax = 0.06;

	const loadCartProductDetails = async () => {
		await ProductService.getProductById(id)
			.then((res) => {
				setProduct(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		loadCartProductDetails();
	}, [product]);

	return (
		<section className="cart">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="mt-3">
							{message && (
								<div
									className="alert alert-success alert-dismissible fade show"
									role="alert"
								>
									<i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
									&nbsp;
									<strong>Success!</strong> New order has been placed
									successfully!!.
								</div>
							)}
						</div>
						<h1 className="text-success mb-3">Shopping Cart</h1> <hr />
						<div className="float-end">
							<i className="fa fa-shopping-cart rounded-pill  bg-danger p-3 fs-4"></i>
							<span className="badge rounded-pill bg-primary fs-5 mb-3">
								{product.length > 1 ? <span>{product.length}1</span> : null}
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="container card p-5">
				<div className="row ">
					<div className="col">
						<div className="table-responsive">
							<table className="table">
								<tbody>
									<tr>
										<td>
											<img
												src={
													product.image
														? `http://localhost:8080/${product.image}`
														: productImgHolder
												}
												className="rounded-circle img-fluid bg-dark"
												alt={product.name}
												title={product.name}
												style={{
													width: "100px",
												}}
											/>
											<td className="text-muted fw-light fs-6">
												{product.description}
											</td>
										</td>
										{/* <td>
											<select
												name="qty"
												value={qty}
												className="form-select form-select-md"
												aria-label="Default select"
											
												onChange={HandleSubmit}
											>
												<option disabled>select qty</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
											</select>
										</td>  

										{/* onChange={(e) => setProduct(e.target.value)} */}

										<button
											className="btn btn-outline-danger rounded-pill"
											title="Remove item"
											// onClick={() => removeFromCart(product.id)}
										>
											<i className="fa fa-trash-o " />
										</button>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="col-md-6">
						<div className="table-responsive">
							<table className="table">
								<thead>
									<tr>
										<th className="fs-4">Product Name</th>

										{/* <th>QTY</th> */}
										<th className="fs-4">Price</th>
									</tr>
								</thead>

								<tr>
									<td>{product.name}</td>
									{/* <td>{product.description}</td> */}
									<td>${parseFloat(product.price).toFixed(2)}</td>
								</tr>
							</table>
						</div>
					</div>
				</div>

				{/* Start of 2 row */}
				<hr />
				<div className="row">
					<div className="col-md-8"></div>
					<div className="col-md-4">
						<div className="table-responsive">
							<table class="table">
								<thead>
									<tr>
										<th className="fs-2">Tax</th>
										<th className="fs-2">Total</th>
									</tr>
								</thead>
								<tbody>
									<tr className="fw-bold">
										<td className="text-danger">
											${Number(product.price).toFixed(2) * tax}
										</td>
										<td className="text-danger">
											${product.price * tax + parseFloat(product.price)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				{/* End of 2 row */}
				<hr />
				{/* Start of 3rd row */}
				<div className="row">
					<div className="col-md-10"></div>
					<div className="col-md-2">
						<button
							className="btn btn-warning btn-lg"
							onClick={(e) => saveOrder(e)}
						>
							PLACE ORDER
						</button>
					</div>
				</div>

				{/* End of 3rd row */}
			</div>
		</section>
	);
};

export default CartListComponent;
