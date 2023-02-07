import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductService from "../service/ProductService";

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
	const productImgHolder = `https://source.unsplash.com/136x136/?${product.name}`;
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
					navigate("/products");
				})
				.catch((err) => {
					setMessage(true);
					console.log(err);
				});
		}
	};

	useEffect(() => {
		loadProductDetails();
	}, [product]);

	return (
		<section className="view-product">
			<div className="container mt-3">
				<h3 className="text-success mb-3">Product Details</h3> <hr />
				<div className="row mt-3">
					<div className="col-md-4 col-sm-6 col-xs-12">
						<img
							src={product.image ? product.image : productImgHolder}
							className="card-img-top img-fluid"
							alt={product.name}
						/>
					</div>
					<div className="col-md-6 col-sm-6 col-xs-12">
						<h2>{product.name}</h2>
						<h4>
							Price: <b className="text-danger">${product.price}</b>
						</h4>

						<p className="text-muted mb-4">{product.description}</p>
						<br />
						<div className="btn-action mt-3">
							<Link className="btn btn-outline-success me-3">Add to Cart</Link>
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
