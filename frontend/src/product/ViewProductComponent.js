import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RatingComponent from "../rating/RatingComponent";

import ProductService from "../service/ProductService";
import "./ProductStyle.css";

const ViewProductComponent = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [message, setMessage] = useState(false);
	const [cart, setCart] = useState([]);

	const [product, setProduct] = useState({
		name: "",
		image: "",
		price: "",
		description: "",
	});

	const productImgHolder = `https://source.unsplash.com/1600x900/?office/?${product.name}`;
	const loadProductDetails = async () => {
		await ProductService.getProductById(id)
			.then((res) => {
				setProduct(res.data);
			})
			.catch((err) => {
				setMessage(true);
				console.log(err);
			});
	};

	const deleteProduct = async (e) => {
		e.preventDefault();

		if (window.confirm("Are you sure you want to delete this product?")) {
			await ProductService.deleteProduct(id)
				.then((res) => {
					setMessage(true);
					setTimeout(() => {
						navigate("/products");
					}, 2000);
				})
				.catch((err) => {
					setMessage(true);
					console.log(err);
				});
		}
	};

	useEffect(() => {
		// Load cart data from localStorage when the component mounts
		const data = localStorage.getItem("cartItems");
		if (data) {
			setCart(JSON.parse(data));
		}
		// const cartData = window.localStorage.getItem("cartItems");
		// setCart(JSON.parse(cartData)); // same as above
	}, []);

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cart));
	}, [cart]);

	/*============new way of saving localStorage data============*/
	//get cart data from localStorage
	// useEffect(() => {
	// 	const cartData = window.localStorage.getItem("cartItems");
	// 	setCart(JSON.parse(cartData));
	// }, []);

	// //save the data to localStorage
	// useEffect(() => {
	// 	window.localStorage.setItem("cartItems", JSON.stringify(cart));
	// });

	const addToCart = (e) => {
		e.preventDefault();
		setCart([...cart, product]);
	};

	const RemoveCartItem = (e, item) => {
		e.preventDefault();
		setCart(cart.filter((x) => x.id !== item.id));
	};

	useEffect(() => {
		loadProductDetails();
	}, [product]);

	return (
		<section className="view-product">
			<div className="container mt-3">
				<div className="mt-3">
					{message && (
						<div
							className="alert alert-danger alert-dismissible fade show"
							role="alert"
						>
							<i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
							&nbsp;
							<strong>Warning!</strong> Product deleted successfully!!.
						</div>
					)}
				</div>
				<h2 className="text-success mb-3">Product Details</h2> <hr />
				<div className="row mt-3">
					<div className="col-md-4 col-sm-12 col-xs-12 mb-4 view-pro-img">
						<Link to={`/view-product/${product.id}`}>
							<img
								src={
									product.image
										? `http://localhost:8080/${product.image}`
										: productImgHolder
								}
								className="card-img-top img-fluid"
								alt={product.name}
							/>
						</Link>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 view-pro-right">
						<h2>{product.name}</h2>
						<h3>
							Price: <b className="text-danger">${product.price}</b>
						</h3>

						{/* Product Rating */}
						<div className="product-rating">
							<RatingComponent rating={product.productRating}></RatingComponent>
						</div>
						<hr />

						<h5 className="text-muted">Decription</h5>
						<p className="text-muted mb-4">{product.description}</p>
						<br />
						<div className="btn-action mt-3">
							<button
								// onClick={(e) => addToCart(e, product.id)}
								//  <Pressable onPress={() => setCart([...cart,item])}>
								// onClick={() => setCart([...cart, product])}
								onClick={(e) => addToCart(e, product.id)}
								className="btn btn-outline-danger me-3"
							>
								Add to Cart
							</button>

							{/* <Link
								to={`/cart/${product.id}`}
								className="btn btn-outline-success me-3"
							>
								Add to Cart
							</Link> */}

							<Link className="btn btn-outline-primary  me-3">Edit</Link>
							<Link
								onClick={(e) => deleteProduct(e, product.id)}
								className="btn btn-outline-danger me-3"
							>
								Delete
							</Link>

							<Link className="btn btn-outline-secondary" to="/products">
								{" "}
								Back to List
							</Link>
						</div>
					</div>
				</div>
				{/* Start of cart item  */}
				<hr />
				{cart.length > 0 ? (
					<>
						<h3>Cart Items</h3> <hr />
						<div className="d-flex mt-3 bg-white p-4 ">
							{cart.map((item) => (
								<div key={item.id}>
									<img
										src={
											product.image
												? `http://localhost:8080/${item.image}`
												: productImgHolder + "?/" + item.name
										}
										className="card-img-top img-fluid"
										alt={item.name}
										style={{ width: 100 }}
									/>
									<h4>{item.name}</h4>
									<p>${item.price}</p> <hr />
									<p>Starts | {item.productRating}</p>
									<p>{item.description}</p> <hr />
									<button
										onClick={(e) => RemoveCartItem(e, item)}
										className="btn btn-outline-danger"
									>
										REMOVE FROM CART
									</button>
								</div>
							))}

							<Link to={`/cart/${product.id}`}>
								<div className="cart-items">
									<button
										type="button"
										className="btn btn-dark position-relative"
									>
										<i className="fa fa-shopping-cart" aria-hidden="true"></i>
										<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
											{cart.length}
											<span className="visually-hidden">cart items</span>
										</span>
									</button>
								</div>
							</Link>
						</div>
						{/* End of cart item  */}
					</>
				) : (
					<div className="cart-items d-flex">
						<button type="button" className="btn btn-dark position-relative">
							<i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								{cart.length}
								<span className="visually-hidden">cart items</span>
							</span>
						</button>

						<h5 className="text-center">
							{" "}
							&nbsp;&nbsp;&nbsp; Your cart is empty!
						</h5>
					</div>
				)}
			</div>
		</section>
	);
};

export default ViewProductComponent;
