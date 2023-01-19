import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PatientService from "../service/PatientService";
import "./Patient.css";


const ViewPatientComponent = () => {
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
				console.log(res.data);
			})

			.catch((e) => {
				console.log(e.message);
			});
	};

	const deletePatient = async (e, id) => {
		e.preventDefault();
		alert("Are you sure, you want to delete this record?");
		await PatientService.deletePatient(id)
			.then(navigate("/patients"))
			.catch((e) => {
				console.log(e.message);
			});
	};

	useEffect(() => {
		loadPatientData();
	}, [patient]);

	return (
		<section className="view-patient">
			<div className="container mt-3">
				<h3 className="text-success">Patient Summary</h3> <hr />
				<div className="row">
					<div className="col-md-3">
						<div className="card">
							<img
								src="https://bootdey.com/img/Content/avatar/avatar7.png"
								className="card-img-top rounded-circle"
								alt={patient.firstName}
							/>
							<div className="card-body">
								<h5 className="card-title">
									{patient.firstName} {patient.lastName}
								</h5>
								<p className="card-text">{patient.note}</p> <hr />
								<p className="alert alert-success">
									Member Since: <b>{patient.creationDate}</b>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-8 bg-body-tertiary rounded tbl-right-view">
						<h4>Personal Details</h4>

						<div className="table-responsive">
							<table className="table table-hover">
								<thead>
									<tr>
										<th>Phone Number</th>
										<th>Email Address</th>
										<th>Martial Status</th>
										<th>Gender</th>
										<th>DOB</th>
										<th>SSN</th>
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
										<th>Contact Number</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{patient.providerName}</td>
										<td>{patient.accountNumber}</td>
										<td>{patient.groupNumber}</td>
										<td>{patient.careType}</td>
										<td>{patient.renewalMonth}</td>
										<td>{patient.contactNumber}</td>
									</tr>
								</tbody>
							</table>
							{/* End of insurance provider */}
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
								<Link
									onClick={(e) => deletePatient(e, patient.id)}
									className="btn btn-outline-danger"
								>
									DELETE
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ViewPatientComponent;
