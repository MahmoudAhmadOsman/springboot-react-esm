import React from "react";
import "./AboutStyle.css";
import { Link } from "react-router-dom";

const AboutComponent = () => {
	return (
		<div className="about-me">
			<div className="container">
				<h1 className="text-success">About Me</h1>{" "}
				<hr className="text-danger" />
				<div className="row">
					<div className="col-md-2">
						<img
							className="rounded-circle img-fluid"
							src="https://avatars.githubusercontent.com/u/34916796?v=4"
							alt="Mahmoud Osman"
						/>
					</div>
					<div className="col-md-8">
						<p>
							I am a software engineer, I have a strong understanding of
							computer programming and the ability to design and develop complex
							software systems. I’m skilled in multiple programming languages
							such as Java, JavaScript, SQL, and frameworks like React, Angular,
							Spring boot, Express and other technologies such as MYSQL,
							PostgreSQL, Docker, JDBC, Maven, AWS, Bootstrap and more.
						</p>
						<p>
							I have experience in working on a variety of projects, from
							small-scale applications to large enterprise systems. I am able to
							analyze requirements and come up with efficient solutions, and
							have a keen eye for detail to ensure that the code is clean,
							maintainable, and free of errors.
						</p>
						<p>
							I am&nbsp;team player, and enjoy collaborating with other
							engineers, designers, and stakeholders to bring projects to
							fruition. Also, I have strong problem-solving skills, and able to
							troubleshoot and debug software issues.
						</p>
						<p>
							I am constantly learning new technologies and programming
							languages to stay current in my field, and I’m able to adapt to
							new situations and challenges. Overall, I’m a valuable asset to
							any software development team and I look forward to working with
							you.
						</p>
						<hr />
						<div className="social-container">
							<h3>Mahmoud Osman</h3>
							<p>Software Engineer</p>
							<div className="social-links">
								{" "}
								<Link to="#" className="me-2">
									<i className="fa fa-twitter"></i>
								</Link>{" "}
								<Link to="#" className="me-2">
									<i className="fa fa-facebook"></i>
								</Link>{" "}
								<Link to="#" className="me-2">
									<i className="fa fa-linkedin"></i>
								</Link>{" "}
								<Link to="#" className="me-2">
									<i className="fa fa-github"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutComponent;
