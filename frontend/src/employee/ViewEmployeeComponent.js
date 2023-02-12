import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const ViewEmployeeComponent = () => {
	const navigate = useNavigate();
	const [message, setMessage] = useState(false);

	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		status: "",
	});

	const { id } = useParams();

	const loadEmployeeDetails = async () => {
		await EmployeeService.getEmployeeById(id)
			.then((res) => {
				setEmployee(res.data);
				// console.log(res.data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	};

	const deleteEmployee = async (e, id) => {
		e.preventDefault();
		if (window.confirm("Are you sure, you want to delete this record?")) {
			await EmployeeService.deleteEmployee(id)
				.then(
					setMessage(true),
					setTimeout(() => {
						navigate("/employees");
					}, 3000)
				)
				.catch((e) => {
					console.log(e.message);
				});
		} else {
			return;
		}
	};

	// console.log(employee);

	useEffect(() => {
		loadEmployeeDetails();
	}, []);

	return (
		<div className="container my-3">
			{message && (
				<div
					className="alert alert-danger alert-dismissible fade show"
					role="alert"
				>
					<strong>Warning!</strong> Employee deleted successfully!!.
				</div>
			)}
			<h3 className="text-success">
				<span className="text-info">{employee.firstName}</span> Profile Details
			</h3>{" "}
			<hr />
			<div className="row">
				<div className="col-md-6">
					<ul className="list-group">
						<li className="list-group-item">
							<b>First Name: </b> {employee.firstName}
						</li>
						<li className="list-group-item">
							<b>Last Name: </b>
							{employee.lastName}
						</li>
						<li className="list-group-item">
							<b>Emaill Address: </b>
							{employee.email}
						</li>
						<li className="list-group-item">
							<b>Phone Number: </b>
							{employee.phone}
						</li>
					</ul>
				</div>
				<div className="col-md-6">
					<div className="table-responsive">
						<table className="table table-hover">
							<thead>
								<tr>
									<th>Role</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										{employee.status > 0 ? (
											<div>
												<span className="text-success">ADMIN</span> | &nbsp;
												<Link
													className="btn btn-outline-success btn-sm"
													to="/employees/add-employee"
												>
													add new employee
												</Link>
											</div>
										) : (
											<span className="text-danger"> EMPLOYEE</span>
										)}
									</td>
									<td>
										{employee.status == 1 ? (
											<span className="text-success">APPROVED</span>
										) : (
											<span className="text-danger">PENDING</span>
										)}
									</td>
									<td>
										{employee.status > 0 ? (
											<div>
												<Link
													onClick={(e) => deleteEmployee(e, employee.id)}
													className="btn btn-outline-danger btn-sm"
													style={{
														marginRight: "5px",
													}}
												>
													Delete
												</Link>
												<Link
													to="/employees"
													className="btn btn-outline-warning btn-sm"
												>
													Cancel
												</Link>
											</div>
										) : (
											<Link
												to="/employees"
												className="btn btn-outline-warning btn-sm"
											>
												Go back
											</Link>
										)}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<Link
						to={`/update-employee/${employee.id}`}
						className="btn btn-outline-info btn-sm "
						style={{
							marginRight: "2px",
							marginBottom: "2px",
						}}
					>
						Update
					</Link>
					<p
						className="btn btn-outline-secondary btn-sm border-0 float-end"
						disabled
					>
						<b>Created At: </b>
						{employee.creationDate != null ? (
							<span>{employee.creationDate}</span>
						) : (
							<span>No date</span>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ViewEmployeeComponent;
