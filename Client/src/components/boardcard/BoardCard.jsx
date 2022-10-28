import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const BoardCard = (props) => {
	return (
		<>
			<div className="board-card">
				<div className="board-img-container">
					<img src={props.img} alt="" />
				</div>
				<h3 className="board-name">{props.name}</h3>
				<p className="board-post">{props.post}</p>
				<a
					href={props.github}
					target="_blank"
					className="board-link"
					rel="noreferrer"
				>
					<BsGithub className="board-link-icon" />
				</a>
				<a
					href={props.linkedin}
					target="_blank"
					rel="noreferrer"
					className="board-link"
				>
					<BsLinkedin className="board-link-icon" />
				</a>
				<a
					href={props.instagram}
					target="_blank"
					rel="noreferrer"
					className="board-link"
				>
					<BsInstagram className="board-link-icon" />
				</a>
			</div>
		</>
	);
};

export default BoardCard;
