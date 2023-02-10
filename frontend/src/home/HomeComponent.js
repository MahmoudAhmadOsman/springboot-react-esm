import React from "react";
import { Link } from "react-router-dom";
import "./HomeStyle.css";

const HomeComponent = () => {
	return (
		<div className="home-page">
			<br />
			<div className="container">
				<div className="row">
					<h1 className="text-success">Welcome to eforce systems </h1> <hr />
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-9">
						{/* flex-container 1 */}
						<div className="flex-container">
							<div className="mobile">
								<i className="fa fa-mobile" aria-hidden="true"></i>
							</div>
							<div className="intro">
								<span>INTRODUCTION PHONE CALL</span>
							</div>
							<div className="min">
								<i className="fa fa-clock-o" aria-hidden="true"></i> &nbsp;
								<span>30 MIN</span>
							</div>
						</div>

						{/* Start of 2nd flex container */}
						<div className="flex-container">
							<div className="mobile">
								<i className="fa fa-video-camera" aria-hidden="true"></i>
							</div>
							<div className="intro">
								<span>VIDEO MEETING</span>
							</div>
							<div className="min">
								<i className="fa fa-clock-o" aria-hidden="true"></i> &nbsp;
								<span>25 MIN</span>
							</div>
						</div>
						{/* End of 2nd flex container */}
					</div>
					<div className="col-md-3">
						<div className="right-panel">
							<div>
								<Link to="https://www.linkedin.com/in/mahmoudaosman/">
									<i className="fa fa-linkedin"></i>
								</Link>
							</div>
							<div>
								<i className="fa fa-facebook"></i>
							</div>
							<div>
								<Link to="https://github.com/MahmoudAhmadOsman">
									<i className="fa fa-github"></i>
								</Link>
							</div>

							<p className="p-4 text-center">
								<span>
									<i
										className="fa fa-calendar-check-o mb-4"
										aria-hidden="true"
									></i>{" "}
									<br />
								</span>
								<b> Schedule on appointment</b> <br />
								<span className="text-muted">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
									fugit ratione ducimus officia cupiditate tenetur!
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
		</div>
	);
};

export default HomeComponent;
