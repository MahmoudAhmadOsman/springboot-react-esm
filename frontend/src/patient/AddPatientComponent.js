import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientService from "../service/PatientService";
import "./PatientStyle.css";
const AddPatientComponent = () => {
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [gender, setGender] = useState("");
	const [martialStatus, setMartialStatus] = useState("");
	const [ssn, setSSN] = useState("");

	const [streetName, setStreetName] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [note, setNote] = useState("");
	const [providerName, setProviderName] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
	const [groupNumber, setGroupNumber] = useState("");
	const [providerPhone, setProviderPhone] = useState("");
	const [careType, setCareType] = useState("");
	const [renewalMonth, setRenewalMonth] = useState("");

	const [error, setError] = useState(false);
	const [message, setMessage] = useState(false);

	const patientData = {
		firstName,
		lastName,
		email,
		phoneNumber,
		dateOfBirth,
		gender,
		martialStatus,
		ssn,
		streetName,
		city,
		state,
		zipCode,
		note,
		providerName,
		accountNumber,
		groupNumber,
		providerPhone,
		careType,
		renewalMonth,
	};

	const addPatient = async (e) => {
		e.preventDefault();

		if (
			patientData.firstName === "" ||
			patientData.lastName === "" ||
			patientData.email === "0" ||
			patientData.phoneNumber === "" ||
			patientData.dateOfBirth === "" ||
			patientData.gender === "" ||
			patientData.martialStatus === "" ||
			patientData.snn === "" ||
			patientData.streetName === "" ||
			patientData.city === "" ||
			patientData.state === "" ||
			patientData.zipCode === "" ||
			patientData.note === "" ||
			patientData.providerName === "" ||
			patientData.accountNumber === "" ||
			patientData.groupNumber === "" ||
			patientData.providerPhone === "" ||
			patientData.careType === "" ||
			patientData.renewalMonth === ""
			// patientData.creationDate == ""
		) {
			setError(true);
		} else {
			await PatientService.savePatient(patientData)
				.then((res) => {
					setMessage(true);

					setTimeout(() => {
						navigate("/patients");
					}, 2000);
				})
				.catch((error) => {
					setError(error.message);
					console.log(error);
				});
		}
		// console.log("New Patient Data: " + patientData);
	};

	return (
		<section className="add-patient">
			<div className="container mb-5">
				<div className="mt-3">
					{message && (
						<div
							className="alert alert-success alert-dismissible fade show"
							role="alert"
						>
							<i className="fa fa-check-square-o" aria-hidden="true"></i> &nbsp;
							<strong>Success!</strong> New Patient added successfully!!.
						</div>
					)}
				</div>
				<form>
					<h1 className="text-success">Register New Patient</h1> <hr />
					<div className="accordion" id="patientAccordion">
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingOne">
								<button
									className="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<h3 className="text-secondary">Patient Information</h3>
								</button>
							</h2>
							<div
								id="collapseOne"
								className="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#patientAccordion"
							>
								<div className="accordion-body">
									<div className="row">
										<h5 className="text-secondary">Patient Information</h5>
										<div className="col-md-4">
											<label htmlFor="firstName">First Name</label>
											<input
												type="text"
												value={firstName}
												onChange={(e) => setFirstName(e.target.value)}
												id="firstName"
												name="firstName"
												className="form-control form-control-lg"
												placeholder="Enter first name"
											/>
											{error && firstName === "" ? (
												<span className="text-danger">
													First name is required!
												</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-4">
											<label htmlFor="firstName">Last Name</label>
											<input
												type="text"
												value={lastName}
												onChange={(e) => setLastName(e.target.value)}
												name="lastName"
												id="lastName"
												className="form-control form-control-lg"
												placeholder="Enter last name"
											/>
											{error && lastName === "" ? (
												<span className="text-danger">
													Last name is required!
												</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-4">
											<label htmlFor="email">Email Address</label>
											<input
												type="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												id="email"
												name="email"
												className="form-control form-control-lg"
												placeholder="Enter email address"
											/>
											{error && email === "" ? (
												<span className="text-danger">
													Email address is required!
												</span>
											) : (
												""
											)}
										</div>
									</div>
									{/* 2nd row */}
									<div className="row mt-3">
										<div className="col-md-3">
											<label htmlFor="phoneNumber">Phone Number</label>
											<input
												type="text"
												value={phoneNumber}
												onChange={(e) => setPhoneNumber(e.target.value)}
												id="phone"
												name="phone"
												className="form-control form-control-lg"
												placeholder="012-345-6789"
											/>

											{error && phoneNumber === "" ? (
												<span className="text-danger">
													Phone number is required!
												</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-2">
											<label htmlFor="dateOfBirth">Date of Birth</label>
											<input
												type="text"
												value={dateOfBirth}
												onChange={(e) => setDateOfBirth(e.target.value)}
												name="dateOfBirth"
												className="form-control form-control-lg"
												placeholder="ex. mm/dd/yyyy"
											/>
											{error && dateOfBirth === "" ? (
												<span className="text-danger">
													Date of birth is required!
												</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-2">
											<label htmlFor="gender">Gender</label>
											<select
												name="gender"
												value={gender}
												onChange={(e) => setGender(e.target.value)}
												className="form-select form-select-lg"
											>
												<option disabled defaultValue>
													Select one
												</option>
												<option value="Male">Male</option>
												<option value="Female">Female</option>
												<option value="Other">Other</option>
											</select>
											{error && gender === "" ? (
												<span className="text-danger">Gender is required!</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-2">
											<label htmlFor="martialStatus">Marial Status</label>
											<select
												id="martialStatus"
												name="gender"
												value={martialStatus}
												onChange={(e) => setMartialStatus(e.target.value)}
												className="form-select form-select-lg"
											>
												<option value="" disabled defaultValue>
													Select one
												</option>
												<option value="Single" defaultValue>
													Single
												</option>
												<option value="Married">Married</option>
												<option value="Divorced">Divorced</option>
												<option value="Widow">Widow</option>
											</select>

											{error && martialStatus === "" ? (
												<span className="text-danger">
													Martial status is required!
												</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-3">
											<label htmlFor="ssn">Social Security Number</label>
											<input
												type="text"
												value={ssn}
												onChange={(e) => setSSN(e.target.value)}
												id="ssn"
												name="ssn"
												className="form-control form-control-lg"
												placeholder="Enter Social Security Number"
											/>
											{error && ssn === "" ? (
												<span className="text-danger">SSN is required!</span>
											) : (
												""
											)}
										</div>
									</div>
									{/*Start of  physical address */}
									<br />
									<h5 className="text-secondary">Physical Address</h5>
									<div className="row">
										<div className="col-md-3">
											<label htmlFor="streetName">Street Name & Number</label>
											<input
												type="text"
												value={streetName}
												onChange={(e) => setStreetName(e.target.value)}
												name="streetName"
												className="form-control form-control-lg"
												placeholder="Enter street name & number"
											/>
											{error && streetName === "" ? (
												<span className="text-danger">
													Street name is required!
												</span>
											) : (
												""
											)}
										</div>

										<div className="col-md-3">
											<label htmlFor="city">City</label>
											<input
												type="text"
												value={city}
												onChange={(e) => setCity(e.target.value)}
												name="city"
												className="form-control form-control-lg"
												placeholder="Enter city name"
											/>
											{error && city === "" ? (
												<span className="text-danger">City is required!</span>
											) : (
												""
											)}
										</div>

										<div className="col-md-3">
											<label htmlFor="state">State</label>
											<input
												type="text"
												value={state}
												onChange={(e) => setState(e.target.value)}
												name="state"
												className="form-control form-control-lg"
												placeholder="Enter state"
											/>
											{error && state === "" ? (
												<span className="text-danger">State is required!</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-3">
											<label htmlFor="zipCode">Zip Code</label>
											<input
												type="text"
												value={zipCode}
												onChange={(e) => setZipCode(e.target.value)}
												name="zipCode"
												className="form-control form-control-lg"
												placeholder="Enter zip code"
												maxLength="5"
											/>
											{error && zipCode === "" ? (
												<span className="text-danger">
													Zip code is required!
												</span>
											) : (
												""
											)}
										</div>
									</div>
									{/*end of  physical address */}
									{/* Note text area */}

									<div className="row mt-3">
										<div className="col-md-12">
											<label htmlFor="note">
												<b>Note</b>
											</label>
											<textarea
												className="form-control form-control-lg mt-2"
												value={note}
												onChange={(e) => setNote(e.target.value)}
												name="note"
												id="note"
												rows="2"
												placeholder="Enter note here"
											></textarea>

											{error && note === "" ? (
												<span className="text-danger">Note is required!</span>
											) : (
												""
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingTwo">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									<h4 className="text-secondary">Insurance Information</h4>
								</button>
							</h2>
							<div
								id="collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									{/* Start of insurance details */}

									<div className="row mt-3">
										<div className="col-md-4">
											<label htmlFor="providerName">Name of the provider</label>
											<input
												type="text"
												value={providerName}
												onChange={(e) => setProviderName(e.target.value)}
												name="providerName"
												className="form-control form-control-lg"
												placeholder="Enter provider name"
											/>
											{error && providerName === "" ? (
												<span className="text-danger">
													Provider name is required!
												</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-4">
											<label htmlFor="accountNumber">
												ID # / Account number
											</label>
											<input
												type="text"
												value={accountNumber}
												onChange={(e) => setAccountNumber(e.target.value)}
												name="accountNumber"
												className="form-control form-control-lg"
												placeholder="Enter account number"
											/>
											{error && accountNumber === "" ? (
												<span className="text-danger">
													Account number is required!
												</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-4">
											<label htmlFor="groupNumber">Group Number</label>
											<input
												type="text"
												value={groupNumber}
												onChange={(e) => setGroupNumber(e.target.value)}
												name="groupNumber"
												className="form-control form-control-lg"
												placeholder="Enter group number"
											/>
											{error && groupNumber === "" ? (
												<span className="text-danger">
													Group number is required!
												</span>
											) : (
												""
											)}
										</div>

										<div className="col-md-4">
											<label htmlFor="providerPhone">
												Provider's Phone Number
											</label>
											<input
												type="text"
												value={providerPhone}
												onChange={(e) => setProviderPhone(e.target.value)}
												name="providerPhone"
												className="form-control form-control-lg"
												placeholder="Enter provider's phone number"
												maxLength={12}
											/>
											{error && providerPhone === "" ? (
												<span className="text-danger">
													Provider phone number is required!
												</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-4">
											<label htmlFor="careType">Care Type</label>
											<input
												type="text"
												value={careType}
												onChange={(e) => setCareType(e.target.value)}
												name="careType"
												className="form-control form-control-lg"
												placeholder="Enter care type"
											/>
											{error && careType === "" ? (
												<span className="text-danger">
													CareType is required!
												</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-4">
											<label htmlFor="renewalMonth">Renewal Month</label>
											<input
												type="text"
												value={renewalMonth}
												onChange={(e) => setRenewalMonth(e.target.value)}
												name="renewalMonth"
												className="form-control form-control-lg"
												placeholder="ex. J, F, M"
											/>
											{error && renewalMonth === "" ? (
												<span className="text-danger">
													Renewal month is required!
												</span>
											) : (
												""
											)}
										</div>
									</div>

									{/* End of insurance details */}
								</div>
							</div>
						</div>
					</div>
					<button
						onClick={(e) => {
							addPatient(e);
						}}
						type="submit"
						className="btn btn-outline-success btn-lg mt-3"
					>
						SAVE
					</button>
				</form>
			</div>

			{/* container div end */}
		</section>
	);
};

export default AddPatientComponent;
