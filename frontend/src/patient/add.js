import React from "react";
import "./Patient.css";
const AddPatientComponent = () => {
	return (
		<section className="add-patient">
			<div className="container">
				<h1 className="text-success">Register New Patient</h1>
				<hr />
				<form action="">
					<div className="row">
						<h3 className="text-secondary">Patient Details</h3>
						<div className="col-md-4">
							<label htmlFor="firstName">First Name</label>
							<input
								type="text"
								name="firstName"
								className="form-control form-control-lg"
								placeholder="Enter first name"
							/>
						</div>
						<div className="col-md-4">
							<label htmlFor="firstName">Last Name</label>
							<input
								type="text"
								name="lastName"
								className="form-control form-control-lg"
								placeholder="Enter last name"
							/>
						</div>
						<div className="col-md-4">
							<label htmlFor="email">Email Address</label>
							<input
								type="email"
								name="email"
								className="form-control form-control-lg"
								placeholder="Enter email address"
							/>
						</div>
					</div>
					{/* 2nd row */}
					<div className="row mt-3">
						<div className="col-md-4">
							<label htmlFor="phone">Phone Number</label>
							<input
								type="text"
								name="phone"
								className="form-control form-control-lg"
								placeholder="Enter phone number"
							/>
						</div>
						<div className="col-md-4">
							<label htmlFor="dob">DOB</label>
							<input
								type="text"
								name="dob"
								className="form-control form-control-lg"
								placeholder="Enter patients birth"
							/>
						</div>
						<div className="col-md-4">
							<label htmlFor="ssn">SSN</label>
							<input
								type="text"
								name="ssn"
								className="form-control form-control-lg"
								placeholder="Enter social security number"
								maxLength="9"
							/>
						</div>
					</div>
					{/*Start of physical address */}
					<br />
					<h4 className="text-secondary">Physical Address</h4>
					<div className="row">
						<div className="col-md-3">
							<label htmlFor="street">Street Name & Number</label>
							<input
								type="text"
								name="street"
								className="form-control form-control-lg"
								placeholder="Enter street name & number"
							/>
						</div>

						<div className="col-md-3">
							<label htmlFor="city">City</label>
							<input
								type="text"
								name="city"
								className="form-control form-control-lg"
								placeholder="Enter city name"
							/>
						</div>

						<div className="col-md-3">
							<label htmlFor="state">State</label>
							<input
								type="text"
								name="state"
								className="form-control form-control-lg"
								placeholder="Enter state"
							/>
						</div>
						<div className="col-md-3">
							<label htmlFor="zipCode">Zip Code</label>
							<input
								type="text"
								name="zipCode"
								className="form-control form-control-lg"
								placeholder="Enter zip code"
								maxLength="5"
							/>
						</div>
					</div>
					{/*end of physical address */}
					{/* Note text area */}

					<div className="row mt-3">
						<div className="col-md-12">
							<label htmlFor="note ">
								<b>Note</b>
							</label>
							<textarea
								className="form-control form-control-lg mt-2"
								name="note"
								id=""
								rows="3"
							></textarea>
						</div>
					</div>
					{/* Start of insurance details */}

					<div className="row mt-3">
						<h4 className="text-secondary">Insurance Details</h4>
						<div className="col-md-4">
							<label htmlFor="provider"> Name of the provider</label>
							<input
								type="text"
								name="provider"
								className="form-control form-control-lg"
								placeholder="Enter provider name"
							/>
						</div>
						<div className="col-md-4">
							<label htmlFor="accountNumber">ID # / Account number</label>
							<input
								type="text"
								name="accountNumber"
								className="form-control form-control-lg"
								placeholder="Enter account number"
							/>
						</div>
						<div className="col-md-4">
							<label htmlFor="groupNumber">Group Number</label>
							<input
								type="text"
								name="groupNumber"
								className="form-control form-control-lg"
								placeholder="Enter group number"
							/>
						</div>

						<div className="col-md-4">
							<label htmlFor="providerPhone">Provider's Phone Number</label>
							<input
								type="text"
								name="providerPhone"
								className="form-control form-control-lg"
								placeholder="Enter provider phone number"
							/>
						</div>
						<div className="col-md-4">
							<label htmlFor="careType">Care Type</label>
							<input
								type="text"
								name="careType"
								className="form-control form-control-lg"
								placeholder="Enter care type"
							/>
						</div>
						<div className="col-md-4">
							<label htmlFor="renewalMonth">Renewal Month</label>
							<input
								type="text"
								name="renewalMonth"
								className="form-control form-control-lg"
								placeholder="Enter renewal month"
							/>
						</div>
					</div>
					{/* End of insurance details */}

					<button className="btn btn-outline-success btn-lg mt-3">SAVE</button>
				</form>
			</div>
		</section>
	);
};

export default AddPatientComponent;
