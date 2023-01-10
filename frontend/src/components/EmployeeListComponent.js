import axios from "axios";

import React, { useEffect, useState } from "react";

import { json, Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const EmployeeListComponent = () => {
	const navigate = useNavigate();

	const [employees, setEmployees] = useState([]);

	//1.
	useEffect(() => {
		getAllEmployees(navigate("/"));
	}, []);

	//2.

	const getAllEmployees = async () => {
		await EmployeeService.getAllEmployees()
			.then((res) => {
				setEmployees(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const deleteEmployee = (e, id) => {
		e.preventDefault();
		// alert("Are you sure, you want to delete thid record?");
		EmployeeService.deleteEmployee(id)
			.then(getAllEmployees())

			.catch((e) => {
				console.log(e.messages);
			});
	};

	return (
		<section className="employee-list">
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-10"></div>
					<div className="col-md-2 float-end">
						<Link
							className="btn btn-outline-danger my-3"
							to="add-employee"
							title="Add New Employee"
						>
							{" "}
							Add{" "}
						</Link>
					</div>
				</div>

				{employees.length > 0 ? (
					<div>
						<h2 className="text-success">List of Employees</h2> <hr />
						<div className="row">
							<div className="col-md-11">
								<div className="table-responsive">
									<table className="table table-hover">
										<thead className="table-dark">
											<tr>
												<th scope="col">ID #</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Email Address</th>
												<th scope="col">Status</th>

												<th>Actions</th>
											</tr>
										</thead>
										<tbody>
											{employees.map((employee) => (
												<tr key={employee.id}>
													<td>{employee.id}</td>
													<td>{employee.firstName}</td>
													<td>{employee.lastName}</td>
													<td>
														{" "}
														{employee.email ? (
															<span> {employee.email} </span>
														) : (
															<span className="text-danger">
																{" "}
																Email address is required!
															</span>
														)}
													</td>
													<td>
														{employee.status == 1 ? (
															<span className="text-success">
																{/* {employee.status}  */}
																APPROVED
															</span>
														) : (
															<span className="text-danger">
																{/* {employee.status}  */}
																PENDING
															</span>
														)}
													</td>

													<td>
														<Link
															to={`/view-employee/${employee.id}`}
															className="btn btn-sm btn-outline-secondary"
															style={{
																marginRight: "2px",
																marginBottom: "2px",
															}}
														>
															View
														</Link>
														<Link
															to={`/add-employee/${employee.id}`}
															className="btn btn-sm btn-outline-success"
															style={{
																marginRight: "2px",
																marginBottom: "2px",
															}}
														>
															Update
														</Link>

														<Link
															onClick={(e) => deleteEmployee(e, employee.id)}
															className="btn btn-sm btn-outline-danger"
														>
															Delete
														</Link>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>

							<div className="col-md-1">
								<span
									className="btn btn-outline-secondary d-none  d-md-block"
									title="Employee total"
								>
									TOTAL
									<span className="badge bg-dark">{employees.length}</span>
								</span>
							</div>
						</div>
					</div>
				) : (
					<div className="alert alert-danger"> No data to show!!</div>
				)}
			</div>
		</section>
	);
};

export default EmployeeListComponent;
