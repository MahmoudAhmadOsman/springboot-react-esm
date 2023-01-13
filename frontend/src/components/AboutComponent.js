import React from "react";
import { useNavigate } from "react-router-dom";

const AboutComponent = () => {
	const navigate = useNavigate();

	return (
		<div className="about">
			<div className="container">
				<h1>About Me</h1> <hr />
				<div className="row">
					<div className="col-md-6"></div>
					<div className="col-md-6">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
							laborum earum est ex, fuga voluptate deserunt provident assumenda.
							Molestias quidem quae delectus iure enim excepturi alias dolorem
							quam culpa repudiandae.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutComponent;
