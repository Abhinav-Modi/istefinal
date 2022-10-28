import React from "react";
import { Link } from "react-router-dom";
import "../../pages/members/Members.css";
const Membersnav = () => {
	return (
		<>
			<h1>
				Our <span className="gradient-bg">Team</span>
			</h1>
			<div className="members-links">
				<ul>
					<li>
						<Link to="/members" className="member-category">
							Board
						</Link>
					</li>
					<li>
						<Link to="/members/mc" className="member-category">
							Management Committee
						</Link>
					</li>
					<li>
						<Link to="/members/wc" className="member-category">
							Working Committee
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Membersnav;
