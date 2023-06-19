import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShoppingCartComponent = ({ cartItems }) => {
	const [cart, setCart] = useState(() => {
		return JSON.parse(localStorage.getItem("cartItems")) || [];
	});
	const handleRemoveCartItem = (item) => {
		const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
		setCart(updatedCart);
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

	// if (cart.length === 0) {
	// 	return (
	// 		<div>
	// 			<h3>Cart Items</h3>
	// 			<hr />
	// 			<p>Your cart is empty!</p>
	// 		</div>
	// 	);
	// }

	return (
		<section className="container">
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
					<h1 className="text-success mt-3">Your Cart Items</h1>
					<Link className="float-end btn btn-outline-info" to={"/products"}>
						Back to shopping
					</Link>{" "}
					<hr /> <br />
					<div className="row">
						{cart.map((item) => (
							<div key={item.id} className="col-md-3">
								<div className="card" style={{ width: "18rem" }}>
									<img
										src={item.image}
										alt={item.name}
										className="card-img-top"
									/>
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<p className="btn btn-secondary btn-sm">${item.price}</p>
										<p className="text-warning fw-bold">
											Stars | {item.productRating}
										</p>
										<p className="card-text">
											{item.description.slice(0, 40)}...
										</p>
										<button
											title="REMOVE"
											onClick={() => handleRemoveCartItem(item)}
											className="btn btn-outline-danger"
										>
											<i className="fa fa-trash"></i>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</>
			)}
		</section>
	);
};

export default ShoppingCartComponent;
