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
					<div className="col-md-8">
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
					<div className="col-md-4">
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
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-4">
						<h1>Lorem ipsum dolor sit amet.</h1>
						<p className="text-muted">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
							amet temporibus, officiis corrupti facere fuga quisquam placeat
							eius non eos, voluptate perspiciatis rerum deleniti earum nisi
							ullam libero quia asperiores minus ut. Aut modi ipsum, quisquam
							nesciunt sint, labore delectus rem facere obcaecati tempore
							consequatur reiciendis assumenda, molestiae quam harum?
						</p>
					</div>
					<div className="col-md-8">
						<h1>Lorem ipsum dolor sit amet.</h1>
						<p className="text-muted">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
							amet temporibus, officiis corrupti facere fuga quisquam placeat
							eius non eos, voluptate perspiciatis rerum deleniti earum nisi
							ullam libero quia asperiores minus ut. Aut modi ipsum, quisquam
							nesciunt sint, labore delectus rem facere obcaecati tempore
							consequatur reiciendis assumenda, molestiae quam harum.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ea nisi cum cumque eius laboriosam facere recusandae in esse blanditiis! Facere quibusdam id similique commodi nam, delectus sequi! Quos recusandae itaque ex! Alias provident voluptates vel expedita beatae, enim facere quam incidunt aliquam necessitatibus architecto nemo eius culpa ipsa harum explicabo. Similique, sed? Odit iste rerum, temporibus perferendis a totam eaque exercitationem debitis iure nisi eligendi officiis architecto voluptatibus commodi porro modi aut voluptas, saepe laborum! Vero dolor aut modi iure eos. Amet doloremque corrupti id obcaecati dicta sit, vitae aspernatur quasi veniam similique, quisquam iusto! Expedita explicabo eligendi repellendus animi deserunt veritatis quisquam rerum dignissimos culpa maxime. Provident atque aliquam beatae tenetur ipsum error, dolorem fugiat dolores itaque placeat nulla, quaerat odit iusto voluptas animi illum doloribus, inventore qui quisquam? Ducimus, dolor! Nam necessitatibus molestias commodi dolorum sapiente, unde ab atque non aliquid. Reiciendis perspiciatis incidunt amet delectus quaerat?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeComponent;
