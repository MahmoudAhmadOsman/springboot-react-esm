import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../service/ProductService";

const AddProductComponent = () => {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [file, setFile] = useState(null);

	const [description, setDescription] = useState("");
	// const [error, setError] = useState(false);

	const [selectedImage, setSelectedImage] = useState(""); // image state

	const productData = { name, price, file, description };

	const base64ConversionForImages = async (e) => {
		console.log(e);
		if (e.target.files[0]) {
			await getBase64(e.target.files[0]);
		}
	};

	const getBase64 = (file) => {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function() {
			// JSON.stringify(productData);
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
			//  productData.file.length === 0 ||
			productData.description.length === 0
		) {
			// setError(true);
			alert("Please fill all the fields");
			return;
		} else {
			console.log(productData);

			console.log(JSON.stringify(productData));

			await ProductService.saveProduct(productData)
				.then((res) => {
					navigate("/products");
				})
				.catch((err) => {
					console.log(err);
				});
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
								{/* {error && name.length <= 0 ? (
									<span className="text-danger">Product name is required!</span>
								) : (
									""
								)} */}
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
								{/* {error && price.length <= 0 ? (
									<span className="text-danger">
										Product price is required!
									</span>
								) : (
									""
								)} */}
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

								{/* <input
									accept="image/*"
									type="file"
									value={file}
										id="file"
									name="file"
									onChange={(e) => setFile(e.target.value)}
								
									className="form-control form-control-lg "
								/> */}

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
							{/* {error && file.length <= 0 ? (
								<span className="text-danger">Product image is required!</span>
							) : (
								""
							)} */}
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
							{/* {error && description.length <= 0 ? (
								<span className="text-danger">
									Product description is required!
								</span>
							) : (
								""
							)} */}
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
