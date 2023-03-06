import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import "./EmployeeStyle.css";

const AddEmployeeComponent = () => {
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	// const [status, setStatus] = useState("");
	const [phone, setPhone] = useState(false);

	const [error, setError] = useState(false);
	const [disable, setDisable] = useState(true);
	const [message, setMessage] = useState(false);

	const employeeData = { firstName, lastName, email, phone };

	const saveEmployee = async (e) => {
		e.preventDefault();

		if (
			employeeData.firstName.length === 0 ||
			employeeData.lastName.length === 0 ||
			employeeData.email.length === 0 ||
			employeeData.phone.length === 0
		) {
			setError(true);
			setDisable(true);
		} else {
			await EmployeeService.saveEmployee(employeeData)
				.then((res) => {
					setMessage(true);
					setTimeout(() => {
						navigate("/employees");
					}, 200);
				}) // console.log(res.data);
				.catch((e) => {
					console.log(e.message);
				});
			setFirstName("");
			setLastName("");
			setEmail("");
			setPhone("");
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
									onChange={(e) => setFirstName(e.target.value)}
									className="form-control form-control-lg"
									id="firstName"
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
									onChange={(e) => setLastName(e.target.value)}
									className="form-control form-control-lg"
									id="lastName"
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
							<div className="mb-3">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="form-control form-control-lg"
									id="email"
									placeholder="Enter  email address"
									name="email"
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
									id="phone"
									name="phone"
									onChange={(e) => setPhone(e.target.value)}
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
									(disable && firstName.length <= 0) ||
									lastName.length <= 0 ||
									email.length <= 0
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
