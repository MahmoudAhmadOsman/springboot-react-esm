import React from "react";
import { Link } from "react-router-dom";
import "./RegisterUserStyle.css";

const RegisterUserComponent = () => {
	return (
		<section className="register-user">
			<div className="container">
				<div className="row mt-2">
					<h2 className="text-success mb-3">Sign Up</h2> <hr />
					<form autoComplete="off">
						<div className="card">
							<div className="card-body">
								<div className="row">
									<div className="col-md-6">
										<div className="mb-3">
											<label htmlFor="firstName">First Name</label>
											<input
												type="text"
												className="form-control form-control-lg"
												id="firstName"
												placeholder="Enter first name"
												name="firstName"
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="mb-3">
											<label htmlFor="lastName">Last Name</label>
											<input
												type="text"
												className="form-control form-control-lg"
												id="lastName"
												placeholder="Enter last name"
												name="lastName"
											/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-12">
										<div className="mb-3">
											<label htmlFor="email">Email Address</label>
											<input
												type="email"
												className="form-control form-control-lg"
												id="email"
												placeholder="Enter  email address"
												name="email"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="mb-3">
											<label htmlFor="userName">UserName</label>
											<input
												type="text"
												id="userName"
												name="userName"
												className="form-control form-control-lg"
												placeholder="Enter  username"
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="mb-3">
											<label htmlFor="password">Password</label>
											<input
												type="password"
												id="password"
												name="password"
												className="form-control form-control-lg"
												placeholder="Enter password"
											/>
										</div>
									</div>
								</div>

								<div className="d-flex flex-row bd-highlight mb-3">
									<div className="p-2 bd-highlight">
										<button
											type="submit"
											className="btn btn-outline-success mb-3"
										>
											REGISTER
										</button>
									</div>
									<div className="p-2 bd-highlight">
										<Link to="#" className="text-danger">
											Already have an account?
										</Link>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default RegisterUserComponent;
