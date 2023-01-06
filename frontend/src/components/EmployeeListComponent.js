import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const EmployeeListComponent = () => {
	const [employees, setEmployees] = useState([]);

	//1.
	useEffect(() => {
		getAllEmployees();
	}, []);

	//2.

	const getAllEmployees = () => {
		EmployeeService.getAllEmployees()
			.then((res) => {
				setEmployees(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	function deleteEmployee(e, id) {
		e.preventDefault();
	}

	return (
		<section className="employee-list">
			<div className="container mt-5">
				<h2 className="text-success">List of Employees</h2> <hr />
				<div className="row">
				<div class="table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">ID #</th>
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Email Address</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{employees.map((employee) => (
								<tr key={employee.id}>
									<td>{employee.id}</td>
									<td>{employee.firstName}</td>
									<td>{employee.lastName}</td>
									<td>{employee.email}</td>
									<td>
										<Link
											to={`/add-employee/${employee.id}`}
											className="btn btn-sm btn-success"
											style={{ marginRight:'2px', marginBottom:'2px'}}
										>
											Update
										</Link>
										<a
											onClick={(e) => deleteEmployee(e, employee.id)}
											className="btn btn-sm btn-danger"
										>
											Delete
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmployeeListComponent;
