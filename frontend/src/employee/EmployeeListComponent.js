import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";
import Pagination from "react-responsive-pagination";
import Loading from "../utils/Loading";
import "./EmployeeStyle.css";

const EmployeeListComponent = () => {
	const navigate = useNavigate();

	const [employees, setEmployees] = useState([]);
	const [search, setSearch] = useState("");

	//Pagination
	const [currentPage, setCurrentPage] = useState(4);
	const totalPages = employees.length;

	const getAllEmployees = async () => {
		await EmployeeService.getAllEmployees()
			.then((res) => {
				setEmployees(res.data);
			})
			.catch((e) => {
				if (e.error) {
					console.log(e.res.status);
				}
			});
	};
	// console.log(employees);

	useEffect(() => {
		getAllEmployees(navigate("/employees"));
	}, []);

	return (
		<section className="employee-list">
			<div className="container mt-3">
				{employees.length > 0 ? (
					<React.Fragment>
						<h2 className="text-success">List of Employees</h2> <hr />
						<div className="row">
							<div className="col-md-11">
								<div className="input-group rounded">
									<input
										type="search"
										className="form-control rounded"
										placeholder="Search"
										aria-label="Search"
										aria-describedby="search-addon"
										onChange={(e) => setSearch(e.target.value)}
									/>
									<span className="input-group-text border-0" id="search-addon">
										<i className="fa fa-search" />
									</span>
								</div>
							</div>
							<div className="col-md-1 float-end">
								<Link
									className="btn btn-outline-success"
									to="/employees/add-employee"
									title="Add New Employee"
								>
									<i className="fa fa-pencil" />
								</Link>
							</div>
						</div>{" "}
						<br />
						<div className="row">
							<div className="col-md-11">
								<div className="table-responsive">
									<table className="table table-hover">
										<thead className="table-secondary">
											<tr>
												<th scope="col">ID #</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Email Address</th>
												<th>View</th>
											</tr>
										</thead>
										<tbody>
											{employees
												.filter((user) => {
													return search.toString().toLowerCase() === ""
														? user
														: user.firstName
																.toString()
																.toLowerCase()
																.includes(search) ||
																user.lastName
																	.toString()
																	.toLowerCase()
																	.includes(search);
												})
												.map((employee) => (
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
																	Email address is required!
																</span>
															)}
														</td>

														<td>
															<Link
																to={`/view-employee/${employee.id}`}
																className="btn btn-outline-dark btn-sm"
																title="View New Employee"
															>
																<i className="fa fa-eye" />
															</Link>
														</td>
													</tr>
												))}
										</tbody>
									</table>
								</div>

								<Pagination
									current={currentPage}
									total={totalPages}
									onPageChange={setCurrentPage}
								/>
							</div>
							<div className="col-md-1">
								<span className="badge rounded-pill bg-dark">
									TOTAL OF EMPLOYEES: &nbsp;{" "}
									<b className="badge rounded-pill bg-danger">
										{" "}
										{employees.length}
									</b>
								</span>
							</div>
						</div>
					</React.Fragment>
				) : (
					<div>
						<Loading />
					</div>
				)}
			</div>
		</section>
	);
};

export default EmployeeListComponent;
