import React from "react";
import { Link } from "react-router-dom";
import "./LoginStyle.css";

const LoginComponent = () => {
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
												type="email"
												id="username"
												name="username"
												class="form-control form-control-lg"
												placeholder="Enter username"
											/>
										</div>
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
											/>
										</div>

										<button type="submit" className="btn btn-outline-success">
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
