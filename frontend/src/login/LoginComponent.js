import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../service/UserService";
import "./LoginStyle.css";

const LoginComponent = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const loginData = {
		username,
		password,
	};

	const loginUser = async (e) => {
		e.preventDefault();
		if (loginData.username.length === 0 || loginData.password.length === 0) {
			setError(true);
			return;
		} else {
			await UserService.userLogin(loginData)
				.then((res) => {
					console.log(res);
					setTimeout(() => {
						navigate("/patients");
					}, 200);
				})
				.catch((err) => {
					console.log(err);
				});
			console.log(loginData);
			setUsername("");
			setPassword("");
		}
	};

	return (
		<section className="login">
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-4 mx-auto">
						<div className="card" style={{ width: "20rem" }}>
							<img
								src="https://source.unsplash.com/200x136/?security"
								className="card-img-top"
								alt="login security image"
							/>
							<div className="card-body">
								<h2 className="card-title text-success">Login</h2> <hr />
								<small className="text-mutted">
									Please provide username & password.
								</small>
								<p className="card-text">
									<form>
										<div className="mb-3">
											<label class="form-label" for="username">
												UserName
											</label>
											<input
												type="text"
												id="username"
												name="username"
												class="form-control form-control-lg"
												placeholder="Enter username"
												onChange={(e) => setUsername(e.target.value)}
											/>
										</div>
										{error && username.length <= 0 ? (
											<span className="text-danger">Username is required!</span>
										) : (
											""
										)}
										<div className="mb-3">
											<label class="form-label" for="password">
												Password
											</label>
											<input
												type="password"
												id="password"
												name="password"
												class="form-control form-control-lg"
												placeholder="Enter password"
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

										<button
											onClick={(e) => loginUser(e)}
											type="submit"
											className="btn btn-outline-success"
										>
											Login
										</button>
										<Link to="/register" className="text-danger ms-2">
											Don't have an acount yet?
										</Link>
									</form>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginComponent;
