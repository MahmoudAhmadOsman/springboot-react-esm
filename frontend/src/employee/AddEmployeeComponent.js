import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import "./EmployeeStyle.css";

const AddEmployeeComponent = () => {
	const navigate = useNavigate();
	const [error, setError] = useState(false);
	const [disable, setDisable] = useState(true);
	const [message, setMessage] = useState(false);

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	});

	const { firstName, lastName, email, phone } = formData;

	const HandleSubmit = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const saveEmployee = async (e) => {
		e.preventDefault();

		if (firstName === "" || lastName === "" || email === "" || phone === "") {
			setError(true);
		} else {
			await EmployeeService.saveEmployee(formData)
				.then((res) => {
					setMessage(true);
					setTimeout(() => {
						navigate("/employees");
					}, 2000);
					console.log(res.data);
				})
				.catch((e) => {
					setError(e.message);
					console.log(e.message);
				});

			formData.firstName = "";
			formData.lastName = "";
			formData.email = "";
			formData.phone = "";
		}
	};

	return (
		<section className="add-employee">
			<div className="container mt-3">
				<div className="mt-3">
					{message && (
						<div
							className="alert alert-success alert-dismissible fade show"
							role="alert"
						>
							<i className="fa fa-check-square-o" aria-hidden="true"></i> &nbsp;
							<strong>Success!</strong> New Employee added successfully!!.
						</div>
					)}
				</div>
				<h2 className="text-success mb-3">Add New Employee</h2> <hr />
				<form>
					<div className="row">
						<div className="col-md-6">
							<div className="mb-3">
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									value={firstName}
									onChange={HandleSubmit}
									className="form-control form-control-lg"
									placeholder="Enter first name"
									name="firstName"
								/>
								{error && firstName.length <= 0 ? (
									<span className="text-danger">First name is required!</span>
								) : (
									""
								)}
							</div>
						</div>
						<div className="col-md-6">
							<div className="mb-3">
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									value={lastName}
									onChange={HandleSubmit}
									className="form-control form-control-lg"
									placeholder="Enter last name"
									name="lastName"
								/>
								{error && lastName.length <= 0 ? (
									<span className="text-danger">Last name is required!</span>
								) : (
									""
								)}
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6">
							``
							<div className="mb-3">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									value={email}
									name="email"
									onChange={HandleSubmit}
									className="form-control form-control-lg"
									placeholder="Enter  email address"
								/>
								{error && email.length <= 0 ? (
									<span className="text-danger">
										Email address is required!
									</span>
								) : (
									""
								)}
							</div>
						</div>
						<div className="col-md-6">
							<div className="mb-3">
								<label htmlFor="phone">Phone Number</label>
								<input
									type="text"
									value={phone}
									name="phone"
									onChange={HandleSubmit}
									className="form-control form-control-lg"
									placeholder="123-456-7890"
									maxlength="12"
								/>
								{error && phone.length <= 0 ? (
									<span className="text-danger">Phone number is required!</span>
								) : (
									""
								)}
							</div>
						</div>
					</div>

					<div className="d-flex flex-row bd-highlight mb-3">
						<div className="p-2 bd-highlight">
							<button
								onClick={(e) => saveEmployee(e)}
								type="submit"
								className="btn btn-outline-success mb-3"
								disabled={
									(disable && firstName === "") ||
									lastName === "" ||
									email === "" ||
									phone === ""
								}
							>
								SUBMIT
							</button>
						</div>
						<div className="p-2 bd-highlight">
							<Link to="/employees" className="btn btn-outline-danger">
								CANCEL
							</Link>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default AddEmployeeComponent;
