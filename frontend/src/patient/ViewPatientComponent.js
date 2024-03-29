import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PatientService from "../service/PatientService";
import "./PatientStyle.css";

const ViewPatientComponent = () => {
	const [message, setMessage] = useState(false);

	const navigate = useNavigate();
	const { id } = useParams();

	const [patient, setPatient] = useState({
		firstName: "",
		lastName: "",
		email: "",
		gender: "",
		marialStatus: "",
		dateOfBirth: "",
		ssn: "",
		phoneNumber: "",
		streetName: "",
		city: "",
		state: "",
		zipCode: "",
		note: "",
		providerName: "",
		accountNumber: "",
		groupNumber: "",
		contactNumber: "",
		careType: "",
		renewalMonth: "",
		creationDate: "",
	});

	const loadPatientData = async () => {
		await PatientService.getPatientById(id)
			.then((res) => {
				setPatient(res.data);
				// console.log(res.data);
			})

			.catch((e) => {
				console.log(e.message);
			});
	};

	const deletePatient = async (e, id) => {
		e.preventDefault();

		if (window.confirm("Are you sure, you want to delete this record?")) {
			await PatientService.deletePatient(id)
				.then(
					setMessage(true),
					setTimeout(() => {
						navigate("/patients");
						window.location.reload();
					}, 2000)
				)
				.catch((e) => {
					console.log(e.message);
				});
		} else {
			return;
		}
	};
	// console.log(patient);

	useEffect(() => {
		loadPatientData();
	}, []);

	return (
		<section className="view-patient">
			<div className="container mt-3">
				<h3 className="text-success">Patient Summary</h3> <hr />
				<div className="row">
					{message && (
						<div className="alert alert-danger  fade show" role="alert">
							<i className="fa fa-warning fa-fw" aria-hidden="true"></i>
							<strong>&nbsp;Warning!</strong> Patient record has been deleted
							successfully!!.
						</div>
					)}

					<div className="col-md-3 col-sm-12 col-xs-12">
						<div className="card">
							<img
								src="https://bootdey.com/img/Content/avatar/avatar7.png"
								className="card-img-top rounded-circle"
								alt={patient.firstName}
							/>
							<div className="card-body text-center">
								<h4 className="card-title">
									<p>Full Name:</p>
									<small>
										{patient.firstName} {patient.lastName}
									</small>
								</h4>
								<hr />

								<p className="text-muted">
									Member Since: {patient.creationDate}
									<sup>
										<span
											data-bs-toggle="tooltip"
											data-bs-placement="top"
											title="The date this record was created."
											className="badge rounded-pill bg-dark ms-1"
										>
											?
										</span>
									</sup>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-9 col-sm-6 col-xs-6 bg-body-tertiary rounded tbl-right-view">
						<h4>Personal Details</h4>

						<div className="table-responsive">
							<table className="table table-hover">
								<thead>
									<tr>
										<th>Phone Number</th>
										<th>Email Address</th>
										<th>Martial Status</th>
										<th>Gender</th>
										<th>Date of Birth</th>
										<th>Social Security Number</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{patient.phoneNumber}</td>
										<td>{patient.email}</td>
										<td>{patient.martialStatus}</td>
										<td>{patient.gender}</td>
										<td>{patient.dateOfBirth}</td>

										<td>
											{patient.ssn ? (
												patient.ssn
											) : (
												<span className="text-danger">SSN Not Provided! </span>
											)}
										</td>
									</tr>
								</tbody>
							</table>
							<br /> <br /> <hr />
							{/* Start of insurance provider */}
							<h4>Insurance Details</h4>
							<table className="table table-hover">
								<thead>
									<tr>
										<th>Provider Name</th>
										<th>Account Number</th>
										<th>Group Number</th>
										<th>Care Type</th>
										<th>Renewal Month</th>
										<th>Provider's Phone Number</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{patient.providerName}</td>
										<td>{patient.accountNumber}</td>
										<td>{patient.groupNumber}</td>
										<td>{patient.careType}</td>
										<td>{patient.renewalMonth}</td>
										<td>{patient.providerPhone}</td>
									</tr>
								</tbody>
							</table>
							{/* End of insurance provider */}
							<hr />
							<div className="note-details">
								<h4>Note</h4>
								<textarea
									className="form-control"
									rows="3"
									disabled
									value={patient.note}
								></textarea>
							</div>
							<br />
							<br />
							<hr />
							{/* Start of address */}
							<h4>Current Address</h4>
							<table className="table table-hover">
								<thead>
									<tr>
										<th>Stress Name</th>
										<th>City</th>
										<th>State</th>
										<th>Zip / Post Code</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{patient.streetName}</td>
										<td>{patient.city}</td>
										<td>{patient.state}</td>
										<td>{patient.zipCode}</td>
									</tr>
								</tbody>
							</table>
							{/* End of Address */}
							<p className="mt-4 float-end">
								<Link to="/patients" className="btn btn-outline-info me-3">
									Back to Patients
								</Link>
								<Link
									to={`/update-patient/${patient.id}`}
									className="btn btn-outline-success me-3"
								>
									UPDATE
								</Link>
								<button
									onClick={(e) => deletePatient(e, patient.id)}
									className="btn btn-outline-danger"
								>
									DELETE
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ViewPatientComponent;
