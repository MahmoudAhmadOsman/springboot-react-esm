import React from "react";

const RatingComponent = (props) => {
	const { rating } = props;

	return (
		<section className="rating">
			<span>
				<i
					className={
						rating >= 1
							? "fa fa-star"
							: rating >= 0.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span>
				<i
					className={
						rating >= 2
							? "fa fa-star"
							: rating >= 1.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span>
				<i
					className={
						rating >= 3
							? "fa fa-star"
							: rating >= 2.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span>
				<i
					className={
						rating >= 4
							? "fa fa-star"
							: rating >= 3.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span>
				<i
					className={
						rating >= 5
							? "fa fa-star"
							: rating >= 4.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>

			<span>
				{/* {rating > 5 ? (
					<span> {5 + " Stars"}</span>
				) : (
					<small> {rating + " Stars"}</small>
				)} */}
			</span>
		</section>
	);
};

export default RatingComponent;
