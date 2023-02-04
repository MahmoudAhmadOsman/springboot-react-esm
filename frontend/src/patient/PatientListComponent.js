import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PatientService from "../service/PatientService";
import Loading from "../utils/Loading";

import "./PatientStyle.css";

const PatientListComponent = () => {
	const navigate = useNavigate();
	const [patients, setPatients] = useState([]);
	const [search, setSearch] = useState("");

	const getPatients = async () => {
		await PatientService.getAllPatients()
			.then((res) => {
				setPatients(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getPatients(navigate("/patients"));
	}, [patients]);

	return (
		<section className="patietn-list">
			<div className="container">
				{patients.length > 0 ? (
					<React.Fragment>
						<h2 className="text-success">Patient Portal</h2> <hr />
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
							<div className="col-md-1">
								<Link
									to="/patient/add-patient"
									className="btn btn-outline-success btn-sm"
									title="Register New Patient"
								>
									<i className="fa fa-pencil" />
								</Link>
							</div>
						</div>{" "}
						<br />
						<div className="row">
							<div className="col-md-12">
								<div className="table-responsive">
									<table className="table table-hover">
										<thead>
											<tr>
												<th> Patient ID</th>
												<th>First Name</th>
												<th>Last Name</th>
												<th>Phone Number</th>
												<th>DOB</th>
												<th>View</th>
											</tr>
										</thead>
										<tbody>
											{patients
												.filter((client) => {
													return client.firstName.toLowerCase() === ""
														? client
														: client.firstName.toLowerCase().includes(search) ||
																client.phoneNumber
																	.toLowerCase()
																	.includes(search) ||
																client.lastName.toLowerCase().includes(search);
												})
												.map((patient) => (
													<tr key={patient.id}>
														<td>
															<small>{patient.firstName.charAt(0)}</small>
															<sup> {patient.id}</sup>
														</td>
														<td>{patient.firstName}</td>
														<td>{patient.lastName}</td>
														<td>{patient.phoneNumber}</td>

														<td>{patient.dateOfBirth}</td>
														<td>
															<Link
																to={`/view-patient/${patient.id}`}
																className="btn btn-outline-dark btn-sm "
																title="View Patient"
															>
																<i class="fa fa-eye" aria-hidden="true"></i>
															</Link>
														</td>
													</tr>
												))}
										</tbody>
									</table>
								</div>
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

export default PatientListComponent;
