import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const ViewEmployeeComponent = () => {
	const navigate = useNavigate();

	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		email: "",
		status: "",
	});
	const { id } = useParams();

	useEffect(() => {
		loadEmployeeDetails();
	}, []);

	const loadEmployeeDetails = async () => {
		await EmployeeService.getEmployeeById(id)
			.then((res) => {
				setEmployee(res.data);
				console.log(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const deleteEmployee = async (e, id) => {
		e.preventDefault();
		alert("Are you sure, you want to delete this record?");
		await EmployeeService.deleteEmployee(id)
			.then(navigate("/"))
			.catch((e) => {
				console.log(e.messages);
			});
	};

	return (
		<div className="container my-3">
			<h1 className="text-success">Employee Details</h1> <hr />
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
					</ul>
				</div>
				<div className="col-md-6">
					<div className="table-responsive">
						<table className="table table-hover">
							<thead>
								<tr>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
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
											onClick={(e) => deleteEmployee(e, employee.id)}
											className="btn btn-sm btn-outline-danger"
											style={{
												marginRight: "5px",
											}}
										>
											Delete
										</Link>

										<Link to="/" className="btn btn-sm btn-outline-warning">
											Cancel
										</Link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewEmployeeComponent;
