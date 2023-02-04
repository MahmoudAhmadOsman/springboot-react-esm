import React from "react";
import "./AboutStyle.css";
import { Link, useNavigate } from "react-router-dom";

const AboutComponent = () => {
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
						<h3>Mahmoud Osman</h3>
					</div>
					<div className="col-md-8">
						<p>
							I'm a software engineer, I have a strong understanding of computer
							programming and the ability to design and develop complex software
							systems. I’m skilled in multiple programming languages such Java,
							JavaScript, SQL, and frameworks like React, Angular, Spring boot,
							Express and other technologies such as MYSQL, PostgreSQL, Docker,
							JDBC, Maven, AWS, Bootstrap, HTML5, CSS3 and more.
						</p>
						<p>
							I have experience in working on a variety of projects, from
							small-scale applications to large enterprise systems. I am able to
							analyze requirements and come up with efficient solutions, and
							have a keen eye for detail to ensure that the code is clean,
							maintainable, and free of errors.
						</p>{" "}
						<hr />
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
