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
	const [SSN, setSSN] = useState("");
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

	const patientData = {
		firstName,
		lastName,
		email,
		phoneNumber,
		dateOfBirth,
		gender,
		martialStatus,
		SSN,
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
			patientData.firstName.length === 0 ||
			patientData.lastName.length === 0 ||
			patientData.email.length === 0 ||
			patientData.phoneNumber.length === 0 ||
			patientData.dateOfBirth.length === 0 ||
			patientData.gender.length === 0 ||
			patientData.martialStatus.length === 0 ||
			patientData.SSN.length === 0 ||
			patientData.streetName.length === 0 ||
			patientData.city.length === 0 ||
			patientData.state.length === 0 ||
			patientData.zipCode.length === 0 ||
			patientData.note.length === 0 ||
			patientData.providerName.length === 0 ||
			patientData.accountNumber.length === 0 ||
			patientData.groupNumber.length === 0 ||
			patientData.providerPhone.length === 0 ||
			patientData.careType.length === 0 ||
			patientData.renewalMonth.length === 0
			// patientData.creationDate.length == 0
		) {
			setError(true);
			return;
		} else {
			console.log(patientData);
			await PatientService.savePatient(patientData)
				.then((res) => {
					navigate("/patients");
				})
				.catch((err) => {
					setError(err.message);
					console.log(err);
				});
		}
	};

	return (
		<section className="add-patient">
			<div className="container mb-5">
				<form action="">
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
											{error && firstName.length <= 0 ? (
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
											{error && lastName.length <= 0 ? (
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
											{error && email.length <= 0 ? (
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

											{error && phoneNumber.length <= 0 ? (
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
											{error && dateOfBirth.length <= 0 ? (
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
												<option value="" disabled selected>
													Select one
												</option>
												<option value="Male">Male</option>
												<option value="Female">Female</option>
												<option value="Other">Other</option>
											</select>
											{error && gender.length <= 0 ? (
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
												<option value="" disabled selected>
													Select one
												</option>
												<option value="Single" selected>
													Single
												</option>
												<option value="Married">Married</option>

												<option value="Divorced">Divorced</option>
											</select>

											{error && martialStatus.length <= 0 ? (
												<span className="text-danger">
													Martial status is required!
												</span>
											) : (
												""
											)}
										</div>
										<div className="col-md-3">
											<label htmlFor="SSN">SSN</label>
											<input
												type="text"
												value={SSN}
												onChange={(e) => setSSN(e.target.value)}
												name="SSN"
												className="form-control form-control-lg"
												placeholder="Enter SSN"
											/>
											{error && SSN.length <= 0 ? (
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
											{error && streetName.length <= 0 ? (
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
											{error && city.length <= 0 ? (
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
											{error && state.length <= 0 ? (
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
											{error && zipCode.length <= 0 ? (
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

											{error && note.length <= 0 ? (
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
											{error && providerName.length <= 0 ? (
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
											{error && accountNumber.length <= 0 ? (
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
											{error && groupNumber.length <= 0 ? (
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
											{error && providerPhone.length <= 0 ? (
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
											{error && careType.length <= 0 ? (
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
											{error && renewalMonth.length <= 0 ? (
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
