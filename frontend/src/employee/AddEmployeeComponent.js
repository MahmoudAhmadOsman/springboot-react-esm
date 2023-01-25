import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const AddEmployeeComponent = () => {
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("");

	const [error, setError] = useState(false);
	const [disable, setDisable] = useState(true);

	const employeeData = { firstName, lastName, email, status };

	const saveEmployee = async (e) => {
		e.preventDefault();

		if (
			employeeData.firstName.length === 0 ||
			employeeData.lastName.length === 0 ||
			employeeData.email.length === 0
		) {
			setError(true);
			setDisable(true);
		} else {
			await EmployeeService.saveEmployee(employeeData)
				.then((res) => {
					navigate("/employees");
				}) // console.log(res.data);
				.catch((e) => {
					console.log(e.message);
				});
		}
	};

	return (
		<>
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-6 mx-auto">
						<h2 className="text-success mb-3">Add New Employee</h2> <hr />
						<form>
							<div className="mb-3">
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									className="form-control form-control-lg"
									id="firstName"
									placeholder="Enter employee first name"
									name="firstName"
								/>
								{error && firstName.length <= 0 ? (
									<span className="text-danger">First name is required!</span>
								) : (
									""
								)}
							</div>

							<div className="mb-3">
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									className="form-control form-control-lg"
									id="lastName"
									placeholder="Enter employee last name"
									name="lastName"
								/>
								{error && lastName.length <= 0 ? (
									<span className="text-danger">Last name is required!</span>
								) : (
									""
								)}
							</div>
							<div className="mb-3">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="form-control form-control-lg"
									id="email"
									placeholder="Enter employee email address"
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
									<Link to="/" className="btn btn-outline-danger">
										{" "}
										Cancel
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddEmployeeComponent;
