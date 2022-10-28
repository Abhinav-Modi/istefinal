import React from "react";

const AcumenCard = (props) => {
	return (
		<>
			<div className="acumen-card">
				<h2>{props.title}</h2>
				<p>{props.desc}</p>
			</div>
		</>
	);
};

export default AcumenCard;
