import React from "react";
import "./Home.css";

const HomeComponent = () => {
	return (
		<div className="home-page">
			<br />
			<div className="container">
				<div className="row">
					<h1 className="text-success">WELCOME TO ESS SYSTEMS</h1> <hr />
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-9">
						{/* flex-container 1 */}
						<div className="flex-container">
							<div className="mobile">
								<i class="fa fa-mobile" aria-hidden="true"></i>
							</div>
							<div className="intro">
								<span>INTRODUCTION PHONE CALL</span>
							</div>
							<div className="min">
								<i class="fa fa-clock-o" aria-hidden="true"></i> &nbsp;
								<span>30 MIN</span>
							</div>
						</div>

						{/* Start of 2nd flex container */}
						<div className="flex-container">
							<div className="mobile">
								{/* <i class="fa fa-mobile" aria-hidden="true"></i> */}
								<i class="fa fa-video-camera" aria-hidden="true"></i>
							</div>
							<div className="intro">
								<span>VIDEO MEETING</span>
							</div>
							<div className="min">
								<i class="fa fa-clock-o" aria-hidden="true"></i> &nbsp;
								<span>25 MIN</span>
							</div>
						</div>
						{/* End of 2nd flex container */}
					</div>
					<div className="col-md-3">
						<div className="right-panel">
							<div>
								<i className="fa fa-linkedin"></i>
							</div>
							<div>
								<i className="fa fa-facebook"></i>
							</div>
							<div>
								<i className="fa fa-github"></i>
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
									{" "}
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
									iusto eligendi deserunt aspernatur repudiandae sapiente.
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
