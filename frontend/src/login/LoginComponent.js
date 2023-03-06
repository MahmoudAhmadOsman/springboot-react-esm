import React from "react";
import "./LoginStyle.css";

const LoginComponent = () => {
	return (
		<section className="login">
			<div className="container">
				<h2>Login</h2>
				<p className="text-mutted">Please provide username and password</p>
				<hr />
				<div className="row"></div>
			</div>
		</section>
	);
};

export default LoginComponent;
