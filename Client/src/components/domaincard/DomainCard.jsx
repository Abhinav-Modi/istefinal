import React from "react";

const domaincard = (props) => {
	return (
		<>
			<div className="card">
				<img src={props.img} alt="" />
				<p>{props.domain}</p>
			</div>
		</>
	);
};

export default domaincard;
