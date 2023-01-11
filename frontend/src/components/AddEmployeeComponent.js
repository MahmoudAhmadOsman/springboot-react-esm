import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const AddEmployeeComponent = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("");

	const navigate = useNavigate();
	const { id } = useParams();

	const employeeData = { firstName, lastName, email, status };

	const saveEmployee = (e) => {
		e.preventDefault();

		if (
			employeeData.firstName !== "" &&
			employeeData.lastName !== "" &&
			employeeData.email != "" 
			 
		) {
			if (id) {
				EmployeeService.updateEmployee(id, employeeData)
					.then(navigate("/"))
					.catch((e) => console.log(e));
			} else {
				EmployeeService.saveEmployee(employeeData)

					.then(navigate("/"))
					.catch((e) => console.log(e));
			}
		} else {
			alert("Please, all fields are required!");
		}
	};

	const updateTitle = () => {
		if (id) {
			return "Update Employee";
		} else {
			return "Add Employee";
		}
	};

	useEffect(() => {
		if (id) {
			EmployeeService.getEmployeeById(id)
				.then((res) => {
					setFirstName(res.data.firstName);
					setLastName(res.data.lastName);
					setEmail(res.data.email);
					setStatus(res.data.status);
				})
				.catch((e) => {
					console.log(e);
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
									name="firstName"
								/>
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
							</div>
							{/* Status */}

							{/* <div className="my-3">
								<label htmlFor="status">Status</label>

								<p>
									{status == 1? (
										<span className="text-success">APPROVED</span>
									) : (
										<span className="text-danger">PENDING</span>
									)}
								</p>
							</div> */}

							<div className="d-flex flex-row bd-highlight mb-3">
								<div className="p-2 bd-highlight">
									<button
										onClick={(e) => saveEmployee(e)}
										type="submit"
										className="btn btn-outline-success mb-3"
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
