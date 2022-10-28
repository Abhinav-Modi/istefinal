import React from "react";
import "./Members.css";
import { Link } from "react-router-dom";
import Membersnav from "../../components/membersnav/Membersnav";
import Abhinav from "../../assets/board/abhinav.jpeg";
import Board from "../../components/board/Board";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BoardCard from "../../components/boardcard/BoardCard";
const Members = () => {
	return (
		<>
			<section className="members-container">
				<Membersnav />
				<Board />
			</section>
		</>
	);
};

export default Members;
