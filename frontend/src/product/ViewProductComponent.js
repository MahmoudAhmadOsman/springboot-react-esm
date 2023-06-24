import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RatingComponent from "../rating/RatingComponent";
import ProductService from "../service/ProductService";
import "./ProductStyle.css";
import { toast } from "react-toastify";

const ViewProductComponent = () => {
	const isAdmin = false;

	const navigate = useNavigate();
	const { id } = useParams();

	const [cart, setCart] = useState(() => {
		return JSON.parse(localStorage.getItem("cartItems")) || [];
	});

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
			.catch((error) => {
				toast.warn(`An Error ${error} has occured!!`, {
					position: "bottom-right",
				});
			});
	};

	const deleteProduct = async (e) => {
		e.preventDefault();

		if (window.confirm("Are you sure you want to delete this product?")) {
			await ProductService.deleteProduct(id)
				.then((res) => {
					setTimeout(() => {
						toast.warn("Product has been deleted successfully!!", {
							position: "bottom-right",
						});
						navigate("/products");
					}, 2000);
				})
				.catch((error) => {
					toast.warn(`An Error ${error} has occured!!`, {
						position: "bottom-right",
					});
					console.log(error);
				});
		}
	};

	const addToCart = (e) => {
		e.preventDefault();
		setCart([...cart, product]);

		setTimeout(() => {
			toast.success("Item added to the cart!", {
				position: "bottom-right",
				autoClose: 5000,
			});
			navigate("/shopping-cart");
			window.location.reload();
		}, 200);
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

	useEffect(() => {
		loadProductDetails();
	}, []);

	return (
		<section className="view-product">
			<div className="container mt-3">
				<h2 className="text-success mb-3">Product Details</h2>
				<Link className="float-end" to="/shopping-cart">
					Go Shopping cart
				</Link>
				<hr />
				<div className="row mt-3">
					<div className="col-md-4 col-sm-12 col-xs-12 mb-4 view-pro-img">
						<Link to={`/view-product/${product.id}`}>
							{/* <img
								src={
									product.image
										? `http://localhost:8080/${product.image}`
										: productImgHolder
								}
								className="card-img-top img-fluid"
								alt={product.name}
							/> */}

							<img
								src={product.image}
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
						<div className="btn-action d-flex mt-3">
							<button
								onClick={(e) => addToCart(e, product.id)}
								className="btn btn-outline-danger me-3"
							>
								Add to Cart
							</button>

							{isAdmin === true ? (
								<div>
									<Link className="btn btn-outline-primary  me-3">Edit</Link>

									<Link
										onClick={(e) => deleteProduct(e, product.id)}
										className="btn btn-outline-danger me-3"
									>
										Delete
									</Link>
								</div>
							) : null}

							<Link className="btn btn-outline-secondary" to="/products">
								{" "}
								Back to List
							</Link>
						</div>
					</div>
				</div>{" "}
			</div>
		</section>
	);
};

export default ViewProductComponent;
