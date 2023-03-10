import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductService from "../service/ProductService";

const AddProductComponent = () => {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [productRating, setProductRating] = useState("");
	const [file, setFile] = useState("");
	const [description, setDescription] = useState("");

	const [error, setError] = useState(false);
	const [message, setMessage] = useState(false);
	const [disable, setDisable] = useState(true);
	const productData = { name, price, file, productRating, description };

	const base64ConversionForImages = async (e) => {
		console.log(e.target.files[0]);
		setFile(e.target.files[0]);
	};

	// const getBase64 = (file) => {
	// 	let reader = new FileReader();
	// 	reader.readAsDataURL(file);
	// 	reader.onload = function() {
	// 		setFile(reader.result);
	// 	};
	// 	reader.onerror = function(error) {
	// 		console.log("An Error has occured: ", error);
	// 	};
	// };

	const saveProduct = async (e) => {
		e.preventDefault();

		if (
			productData.name.length === 0 ||
			productData.price.length === 0 ||
			productData.file.length === 0 ||
			productData.productRating.length === 0 ||
			productData.description.length === 0
		) {
			setError(true);
			return error;
		} else {
			const formData = new FormData();

			formData.append(
				"product",
				`{ "name":"${name}",
				"description":"${description}",
				"image":null,
				"productRating":"${productRating}",
				"price":"${price}"}`
			);

			formData.append("image", file);

			await ProductService.saveProduct(formData)
				.then((res) => {
					// console.log(res);
					setMessage(true);
					setTimeout(() => {
						navigate("/products");
					}, 2000);

					// if (res.ok) {
					// 	setMessage(true);
					// 	setTimeout(() => {
					// 		navigate("/products");
					// 	}, 300);
					// } else {
					// 	alert("Something went wrong!");
					// 	return;
					// }
				})

				.catch((err) => {
					console.log(err);
				});

			// axios.post(`http://localhost:8080/api/v3/products/save`, formData)
			//     .then(response => console.log(response))
			//     .catch(error => console.log(error));

			console.log(productData);

			setName("");
			setPrice("");
			setDescription("");
			setProductRating("");
		}
	};

	return (
		<section className="add-product">
			<div className="container">
				<div className="mt-3">
					{message && (
						<div
							className="alert alert-success alert-dismissible fade show"
							role="alert"
						>
							<i className="fa fa-check-square-o" aria-hidden="true"></i> &nbsp;
							<strong>Success!</strong> Product added successfully!!.
						</div>
					)}
				</div>
				<h2 className="text-success">Add New Product</h2> <hr />
				<form method="POST" enctype="multipart/form-data" autoComplete="on">
					<div className="row">
						<div className="col-md-6">
							<div className="mb-3 mt-3">
								<label htmlFor="name" className="form-label">
									Product Name
								</label>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									name="name"
									id="name"
									className="form-control form-control-lg"
									placeholder="Product name"
								/>
								{error && name.length <= 0 ? (
									<span className="text-danger">Product name is required!</span>
								) : (
									""
								)}
							</div>
						</div>
						<div className="col-md-2">
							<div className="mb-3 mt-3">
								<label htmlFor="price" className="form-label">
									Product Price
								</label>
								<input
									type="number"
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									name="price"
									id="price"
									className="form-control form-control-lg"
									placeholder="Price $"
								/>
								{error && price.length <= 0 ? (
									<span className="text-danger">
										Product price is required!
									</span>
								) : (
									""
								)}
							</div>
						</div>
					</div>
					{/* Row 2 file */}

					<div className="row">
						<div className="col-md-6">
							<div className="mb-3 mt-3">
								<label htmlFor="file" className="form-label">
									Choose Product Image
								</label>

								<input
									type="file"
									accept="image/*"
									id="file"
									name="file"
									className="form-control form-control-lg "
									onChange={(e) => base64ConversionForImages(e)}
								/>

								{error && file.length <= 0 ? (
									<span className="text-danger">
										Product image is required!
									</span>
								) : (
									""
								)}
							</div>
						</div>
						<div className="col-md-2">
							<div className=" mt-3">
								<label htmlFor="productRating" className="form-label">
									Product Rating
								</label>

								<input
									type="text"
									id="productRating"
									name="productRating"
									className="form-control form-control-lg "
									placeholder="Enter: 1, 2, 3,4 or 5"
									maxLength="5"
									value={productRating}
									onChange={(e) => setProductRating(e.target.value)}
								/>
							</div>

							{error && productRating.length <= 0 ? (
								<span className="text-danger">Product rating is required!</span>
							) : (
								""
							)}
							{error && productRating > 5 ? (
								<span className="text-danger">
									Product rating must not be greater than 5.
								</span>
							) : (
								""
							)}
						</div>
					</div>

					{/* Row 3 */}
					<div className="row">
						<div className="mb-3 mt-3">
							<div className="col-md-12">
								<label htmlFor="description" className="form-label">
									Product Description
								</label>
								<textarea
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									name="description"
									id="description"
									className="form-control form-control-lg"
									placeholder="Product description"
									rows="5"
								></textarea>
							</div>
							{error && description.length <= 0 ? (
								<span className="text-danger">
									Product description is required!
								</span>
							) : (
								""
							)}
						</div>
					</div>

					<button
						className="btn btn-outline-success btn-lg me-3"
						onClick={(e) => {
							saveProduct(e);
						}}
						// disabled={
						// 	(disable && name.length <= 0) ||
						// 	price.length <= 0 ||
						// 	file.length <= 0 ||
						// 	description.length <= 0 ||
						// 	productRating.length <= 0 ||
						// 	productRating.length > 5
						// }
					>
						SUBMIT
					</button>
					<Link to="/products" className="btn btn-outline-danger btn-lg">
						CANCEL
					</Link>
				</form>
			</div>
		</section>
	);
};

export default AddProductComponent;
