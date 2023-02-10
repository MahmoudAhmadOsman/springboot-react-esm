import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../service/ProductService";

const AddProductComponent = () => {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [file, setFile] = useState("");

	const [description, setDescription] = useState("");
	const [error, setError] = useState(false);

	const productData = { name, price, file, description };

	const base64ConversionForImages = async (e) => {
		console.log(e.target.files[0]);
		setFile(e.target.files[0]);
	};

	const getBase64 = (file) => {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function() {
			setFile(reader.result);
		};
		reader.onerror = function(error) {
			console.log("An Error has occured: ", error);
		};
	};

	const saveProduct = async (e) => {
		e.preventDefault();

		if (
			productData.name.length === 0 ||
			productData.price.length === 0 ||
			productData.file.length === 0 ||
			productData.description.length === 0
		) {
			setError(true);
			return;
		} else {
			const formData = new FormData();

			formData.append(
				"product",
				`{ "name":"${name}",
				"description":"${description}",
				"image":null,
				"price":"${price}"}`
			);

			formData.append("image", file);

			await ProductService.saveProduct(formData)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});

			// axios.post(`http://localhost:8080/api/v3/products/save`, formData)
			//     .then(response => console.log(response))
			//     .catch(error => console.log(error));

			setTimeout(() => {
				navigate("/products");
			}, 1000);
		}
	};

	return (
		<section className="add-product">
			<div className="container">
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
						<div className="col-md-6">
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
									placeholder="Product price $"
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
						<div className="mb-3 mt-3">
							<div className="col-md-4">
								<label htmlFor="file" className="form-label d-none">
									Choose Product Image
								</label>

								<input
									type="file"
									accept="image/*"
									//  value={file}
									id="file"
									name="file"
									className="form-control form-control-lg "
									onChange={(e) => base64ConversionForImages(e)}
								/>
							</div>
							{error && file.length <= 0 ? (
								<span className="text-danger">Product image is required!</span>
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
						className="btn btn-outline-success btn-lg"
						onClick={(e) => {
							saveProduct(e);
						}}
					>
						SUBMIT
					</button>
				</form>
			</div>
		</section>
	);
};

export default AddProductComponent;
