import React from "react";
import "./About.css";
import { Link, useNavigate } from "react-router-dom";

const AboutComponent = () => {
	const navigate = useNavigate();

	return (
		<div className="about-me">
			<div className="container">
				<h1>About Me</h1> <hr />
				<div className="row">
					<div className="col-md-2">
						<img
							className="rounded-circle img-fluid"
							src="https://media.licdn.com/dms/image/C4E03AQH_3cIm6ypvLA/profile-displayphoto-shrink_200_200/0/1594223983097?e=1680134400&v=beta&t=W0uJKkOZB8nGbpFF9ok_lvlX6RvFGwSUu73DZRvmf2E"
							alt="Mahmoud Osman"
						/>
					</div>
					<div className="col-md-8">
						<p>
							Creative, experienced & detailed-oriented software engineer who
							has experience in Java, JDBC, Mockito, JavaScript, Nodejs,
							TypeScript, SQL, MYSQL, MongoDB, PostgreSQL, Spring Boot, Grails,
							HTML, CSS3, Bootstrap, Angular, Express, React, PHP, Laravel, AWS,
							Maven, Apache Tomcat & Docker.
						</p>
						<Link
							to="#"
							className="btn btn-outline-primary btn-lg"
							target="_blank"
						>
							LEARN MORE
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutComponent;
