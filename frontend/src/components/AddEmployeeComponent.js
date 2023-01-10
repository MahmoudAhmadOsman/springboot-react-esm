import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const AddEmployeeComponent = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	//structure: firstName, lastName & email

	const employeeData = { firstName, lastName, email };

	const { id } = useParams();

	const navigate = useNavigate();

	const saveEmployee = (e) => {
		e.preventDefault();

		if (
			employeeData.firstName != "" &&
			employeeData.lastName != "" &&
			employeeData.email != ""
		) {
			// console.log(e.target.value);
			navigate("/add-employee");
		} else {
			EmployeeService.addEmployee()
				.then()
				.catch((e) => console.log(e));
		}
		alert("form fields are required!!");
	};

	return (
		<>
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-6 mx-auto">
						<h2 className="text-success mb-3">Add New Employee</h2> <hr />{" "}
						<br />
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
							<button
								onClick={(e) => saveEmployee(e)}
								type="submit"
								className="btn btn-success mb-3"
							>
								SUBMIT
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddEmployeeComponent;
