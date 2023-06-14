import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RatingComponent from "../rating/RatingComponent";

import ProductService from "../service/ProductService";
import "./ProductStyle.css";

const ViewProductComponent = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [message, setMessage] = useState(false);

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
		loadProductDetails();
	}, []);

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
							<Link
								// to="/cart"
								to={`/cart/${product.id}`}
								className="btn btn-outline-success me-3"
							>
								Add to Cart
							</Link>
							{/* to={`/update-employee/${employee.id}`} */}
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
			</div>
		</section>
	);
};

export default ViewProductComponent;
