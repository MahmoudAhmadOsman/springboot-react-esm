import React from "react";
import "./SenderStyle.css";
const AddSenderComponent = () => {
	return (
		<section className="add-sender-component">
			<div className="container">
				<h1 className="text-success">Alpha Money Transfer</h1>{" "}
				<form>
					<h5 className="text-muted">Sender Infomation & Registration</h5>
					<div className="row">
						<div className="col-md-4">
							<div className="mb-3 mt-3">
								<label htmlFor="firstName" className="form-label">
									First Name
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="firstName"
									placeholder="Enter first name"
									name="firstName"
								/>
							</div>
						</div>
						<div className="col-md-4">
							<div className="mb-3 mt-3">
								<label htmlFor="middleName" className="form-label">
									Middle Name
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="middleName"
									placeholder="Enter middle name"
									name="middleName"
								/>
							</div>
						</div>
						<div className="col-md-4">
							<div className="mb-3 mt-3">
								<label htmlFor="lastName" className="form-label">
									Last Name
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="lastName"
									placeholder="Enter last name"
									name="lastName"
								/>
							</div>
						</div>
					</div>
					{/* row 2 */}
					<div className="row">
						{/* Gender */}
						<div className="col-md-4">
							<div className="mb-3 mt-3">
								<label htmlFor="gender" className="form-label">
									Gender
								</label>
								<select className="form-select form-select-lg" id="gender">
									<option value="" disabled selected>
										Select an option
									</option>
									<option value="MALE">Male</option>
									<option value="FEMALE">Female</option>
									<option value="OTHER">Other</option>
								</select>
							</div>
						</div>
						{/* DOB */}

						<div className="col-md-4">
							<div className="mb-3 mt-3">
								<label htmlFor="dob" className="form-label">
									DOB
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="dob"
									placeholder="ex. 10/10/1990"
									name="dob"
								/>
							</div>
						</div>
						{/* SSN */}
						<div className="col-md-4">
							<div className="mb-3 mt-3">
								<label htmlFor="ssn" className="form-label">
									SSN
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="ssn"
									placeholder="ex. 487-98-6748"
									name="ssn"
								/>
							</div>
						</div>
					</div>
					{/* row 3 */}
					<div className="row">
						<div className="col-md-3">
							<div className="mb-3 mt-3">
								<label htmlFor="licenseNumber" className="form-label">
									ID Number / Driver License Number
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="licenseNumber"
									placeholder="Driver license number"
									name="licenseNumber"
								/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="mb-3 mt-3">
								<label htmlFor="issuedDate" className="form-label">
									Issued Date
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="issuedDate"
									placeholder="ex. 10/10/1990"
									name="issuedDate"
								/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="mb-3 mt-3">
								<label htmlFor="expirationDate" className="form-label">
									Expiration Date
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="expirationDate"
									placeholder="ex. 10/10/2050"
									name="expirationDate"
								/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="mb-3 mt-3">
								<label htmlFor="issuanceAuthority" className="form-label">
									Issuance Authority
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="issuanceAuthority"
									placeholder="Enter Issuance Authority"
									name="issuanceAuthority"
								/>
							</div>
						</div>
					</div>
					<br />
					{/* row 4 */}
					<h3 className="text-secondary">Sender's Address</h3>
					<div className="row">
						<div className="col-md-3">
							<div className="mb-3 mt-3">
								<label htmlFor="streetName" className="form-label">
									Street Name & Number
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="streetName"
									placeholder="Enter  street name"
									name="streetName"
								/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="mb-3 mt-3">
								<label htmlFor="city" className="form-label">
									City
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="city"
									placeholder="Enter  city name"
									name="city"
								/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="mb-3 mt-3">
								<label htmlFor="state" className="form-label">
									State
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="state"
									placeholder="Enter  state name"
									name="state"
								/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="mb-3 mt-3">
								<label htmlFor="postalCode" className="form-label">
									Postal Code
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="postalCode"
									placeholder="Enter  postal code"
									name="postalCode"
								/>
							</div>
						</div>
					</div>
					{/* row 5 */}
					<div className="row">
						<div className="col-md-3">
							<div className="mb-3 mt-3">
								<label htmlFor="phoneNumber" className="form-label">
									Phone Number
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="phoneNumber"
									placeholder="Enter  phone number"
									name="phoneNumber"
								/>
							</div>
						</div>

						<div className="col-md-3">
							<div className="mb-3 mt-3">
								<label htmlFor="email" className="form-label">
									Email Address
								</label>
								<input
									type="text"
									className="form-control form-control-lg "
									id="email"
									placeholder="Enter  email address"
									name="email"
								/>
							</div>
						</div>

						<div className="col-md-3">
							<div className="mb-3 mt-3">
								<label htmlFor="question" className="form-label">
									How long have you lived in this address?
								</label>
								<select className="form-select form-select-lg" id="state">
									<option value="" disabled selected>
										Select an option
									</option>
									<option value="LESS THAN 1 YEAR">Less than 1 year</option>
									<option value="MORE THAN 2 YEARS">More than 2 years</option>
									<option value="MORE THAN 5 YEARS">More than 5 years</option>
									<option value="MONTH"> Less than a month</option>
								</select>
							</div>
						</div>
					</div>
					<div className="mb-3 mt-3">
						<button className="btn btn-outline-success btn-lg">SUBMIT</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default AddSenderComponent;
