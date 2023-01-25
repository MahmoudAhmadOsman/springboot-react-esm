import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const UpdateEmployeeComponent = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	// const [status, setStatus] = useState("");

	const navigate = useNavigate();
	const { id } = useParams();

	const employeeData = { firstName, lastName, email };

	const updateEmployee = (e) => {
		e.preventDefault();

		if (
			employeeData.firstName.length === 0 ||
			employeeData.lastName.length === 0 ||
			employeeData.firstName.length === 0
		) {
			setError(true);
			return;
		}

		if (id) {
			EmployeeService.patchEmployee(id, employeeData)
				.then(navigate("/view-employee/" + id))

				.catch((e) => console.log(e));
			// console.log(employeeData);
		}
	};

	const updateTitle = () => {
		if (id) {
			return "Update Employee";
		} else {
			return "";
		}
	};

	useEffect(() => {
		if (id) {
			EmployeeService.getEmployeeById(id)
				.then((res) => {
					setFirstName(res.data.firstName);
					setLastName(res.data.lastName);
					setEmail(res.data.email);
					// setStatus(res.data.status);
				})
				.catch((e) => {
					console.log(e.message);
					e.status(401).send("Error: ", e.message);
				});
		}
	}, []);

	return (
		<>
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-6 mx-auto">
						<h2 className="text-success mb-3">{updateTitle()}</h2> <hr /> <br />
						<form>
							<div className="mb-3 mt-">
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									className="form-control form-control-lg"
									id="firstName"
									placeholder="Enter employee first name"
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
										onClick={(e) => updateEmployee(e)}
										type="submit"
										className="btn btn-outline-success mb-3"
									>
										SUBMIT
									</button>
								</div>
								<div className="p-2 bd-highlight">
									<Link
										to={`/view-employee/${id}`}
										className="btn btn-outline-danger"
									>
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

export default UpdateEmployeeComponent;
