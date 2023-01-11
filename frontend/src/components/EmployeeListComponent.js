import axios from "axios";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
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
							Add
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
														<Link
															to={`/view-employee/${employee.id}`}
															className="btn btn-outline-secondary btn-sm "
															style={{
																marginRight: "2px",
																marginBottom: "2px",
															}}
														>
															View
														</Link>
														<Link
															to={`/add-employee/${employee.id}`}
															className="btn btn-outline-success btn-sm "
															style={{
																marginRight: "2px",
																marginBottom: "2px",
															}}
														>
															Update
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
					<div className="alert alert-danger text-center fw-bold">
						{" "}
						NO DATA TO SHOW!!!
					</div>
				)}
			</div>
		</section>
	);
};

export default EmployeeListComponent;