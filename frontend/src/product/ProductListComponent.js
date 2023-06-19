import React, { useEffect, useState } from "react";
import RatingComponent from "../rating/RatingComponent";
import { Link } from "react-router-dom";
import ProductService from "../service/ProductService";
import Loading from "../utils/Loading";
import "./ProductStyle.css";

const ProductListComponent = () => {
	const productImgHolder = "https://source.unsplash.com/136x136";
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const getAllProducts = async () => {
		await ProductService.getAllProducts()
			.then((res) => {
				setProducts(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useState(() => {
		getAllProducts();
	}, []);

	return (
		<section className="product-list">
			<div className="container">
				<h1 className="text-success">Product List</h1> <hr />
				<div className="loadding">
					{loading && (
						<div className="loading">
							<Loading />
						</div>
					)}
				</div>
				<div className="row mt-3">
					{products.map((product) => {
						return (
							<div
								key={product.id}
								className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
							>
								<div className="card mt-3 shadow-lg bg-body rounded">
									<Link to={`/view-product/${product.id}`}>
										{/* <img
											src={
												product.image
													? `http://localhost:8080/${product.image}`
													: productImgHolder + "?/" + product.name
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

									<div className="card-body mb-3">
										<h3 className="card-title">{product.name}</h3> <hr />
										<p className="text-muted">
											{product.description.slice(0, 100)}...
										</p>{" "}
										<hr />
										<h3 className="card-text text-danger">
											${product.price}
										</h3>{" "}
										<br />
										<Link
											to={`/view-product/${product.id}`}
											className="btn btn-outline-success"
										>
											View
										</Link>
									</div>
								</div>
							</div>
						);
					})}
					{products.length === 0 ? (
						<div className="alert alert-danger text-center">
							No Products Found!
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</section>
	);
};

export default ProductListComponent;
