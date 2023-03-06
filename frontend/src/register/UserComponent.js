import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import UserService from "../service/UserService";
import "./UserStyle.css";

const UserComponent = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [emailId, setEmailId] = useState("");
	const [password, setPassword] = useState("");
	// const [enabled, setEnabled] = useState(0);
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const userData = {
		firstName,
		lastName,
		userName,
		emailId,
		password,
	};

	const saveUser = async (e) => {
		e.preventDefault();

		if (
			userData.firstName.length === 0 ||
			userData.lastName.length === 0 ||
			userData.userName.length === 0 ||
			userData.emailId.length === 0 ||
			userData.password.length === 0
		) {
			// alert("Please fill all the fields");
			setError(true);
			return;
		} else {
			await UserService.registerUser(userData)
				.then((res) => {
					console.log(res);
					setTimeout(() => {
						// navigate("/login");
						navigate("/register");
					}, 200);
				})
				.catch((err) => {
					console.log(err);
				});
			console.log(userData);
			setFirstName("");
			setLastName("");
			setUserName("");
			setEmailId("");
			setPassword("");
		}
	};

	return (
		<section className="register-user">
			<div className="container">
				<div className="row mt-2">
					<h2 className="text-success mb-3">Sign Up</h2>
					<p className="text-muted">Please fillout the below form</p>
					<hr />
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
												onChange={(e) => setFirstName(e.target.value)}
											/>
											{error && firstName.length <= 0 ? (
												<span className="text-danger">
													First name is required!
												</span>
											) : (
												""
											)}
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
												onChange={(e) => setLastName(e.target.value)}
											/>
											{error && lastName.length <= 0 ? (
												<span className="text-danger">
													Last name is required!
												</span>
											) : (
												""
											)}
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
												onChange={(e) => setEmailId(e.target.value)}
											/>
											{error && emailId.length <= 0 ? (
												<span className="text-danger">
													Emai address is required!
												</span>
											) : (
												""
											)}
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="mb-3">
											<label htmlFor="userName">UserName</label>
											<input
												type="text"
												className="form-control form-control-lg"
												id="userName"
												name="userName"
												placeholder="Enter  username"
												onChange={(e) => setUserName(e.target.value)}
											/>
											{error && userName.length <= 0 ? (
												<span className="text-danger">
													UserName is required!
												</span>
											) : (
												""
											)}
										</div>
									</div>
									<div className="col-md-6">
										<div className="mb-3">
											<label htmlFor="password">Password</label>
											<input
												type="password"
												className="form-control form-control-lg"
												id="password"
												name="password"
												placeholder="Enter password"
												autoComplete="off"
												onChange={(e) => setPassword(e.target.value)}
											/>
											{error && password.length <= 0 ? (
												<span className="text-danger">
													Password is required!
												</span>
											) : (
												""
											)}
										</div>
									</div>
								</div>

								<div className="d-flex flex-row bd-highlight mb-3">
									<div className="p-2 bd-highlight">
										<button
											onClick={(e) => saveUser(e)}
											type="submit"
											className="btn btn-outline-success mb-3"
										>
											REGISTER
										</button>
									</div>
									<div className="p-2 bd-highlight">
										<Link to="/login" className="text-danger">
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

export default UserComponent;
