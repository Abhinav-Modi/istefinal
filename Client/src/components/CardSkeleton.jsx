import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = ({ cards }) => {
	return Array(cards)
		.fill(0)
		.map((item, index) => (
			<div className="card-skeleton">
				<div className="skeleton-img">
					<Skeleton circle width={`10rem`} height={100} borderRadius={100} />
				</div>
				<div className="right-col">
					<Skeleton className="skeleton-text" />
					<Skeleton className="skeleton-text" />
					<Skeleton className="skeleton-text" />
				</div>
			</div>
		));
};

export default CardSkeleton;
