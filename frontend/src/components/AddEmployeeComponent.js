import React from "react";

const AddEmployeeComponent = () => {
	return (
		<>
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-6 mx-auto">
						<h2 className="text-success mb-3">Add New Employee</h2> <hr />{" "}
						<br />
						<form>
							<div className="mb-3 mt-">
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									className="form-control form-control-lg"
									id="firstName"
									placeholder="Enter your first name"
									name="firstName"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									className="form-control form-control-lg"
									id="lastName"
									placeholder="Enter your first name"
									name="lastName"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									className="form-control form-control-lg"
									id="email"
									placeholder="Enter your email"
									name="email"
								/>
							</div>
							<button type="submit" className="btn btn-success mb-3">
								SUBMIT
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddEmployeeComponent;
