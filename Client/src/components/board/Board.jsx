import React from "react";
import BoardCard from "../boardcard/BoardCard";
import { useState, useEffect } from "react";
import axios from "axios";
import CardSkeleton from "../CardSkeleton";
const Board = () => {
	const [myrepo, SetRepo] = useState([]);
	const url = "/board/getallboard";
	const [ispending, setIspending] = useState(true);

	useEffect(() => {
		const getrepo = async () => {
			try {
				const response = await axios.get(url);
				console.log(response);
				const data = response.data;
				SetRepo(data);
				setIspending(false);
			} catch (error) {
				console.log(error);
			}
		};
		getrepo();
	}, [url]);
	return (
		<>
			<div className="board-card-row">
				{ispending && <CardSkeleton cards={12} />}
				{myrepo.map((boardmember) => {
					return (
						<>
							<BoardCard
								key={boardmember._id}
								img={boardmember.photo}
								name={boardmember.name}
								post={boardmember.role}
								github={boardmember.github || null}
								linkedin={boardmember.linkedin || null}
								instagram={boardmember.instagram || null}
							/>
						</>
					);
				})}
				{/* <BoardCard
					img={Abhinav}
					name="Parv Kohli"
					post="President"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Keshav Churiwal"
					post="Vice President"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Anika Ariga"
					post="General Secretary"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Abhinav Modi"
					post="Web Dev Head & Treasurer"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Ankit Mishra"
					post="Tech Head (App Dev)"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Sakshi Singh"
					post="Tech Head (Web Dev)"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Abhinav Modi"
					post="Web Dev Head & Treasurer"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Abhinav Modi"
					post="Web Dev Head & Treasurer"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Abhinav Modi"
					post="Web Dev Head & Treasurer"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Abhinav Modi"
					post="Web Dev Head & Treasurer"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Abhinav Modi"
					post="Web Dev Head & Treasurer"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Abhinav Modi"
					post="Web Dev Head & Treasurer"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/>
				<BoardCard
					img={Abhinav}
					name="Abhinav Modi"
					post="Web Dev Head & Treasurer"
					github="https://github.com/Abhinav-Modi"
					linkedin="https://linkedin.com/in/abhinav-modi-5312221b5"
				/> */}
			</div>
		</>
	);
};

export default Board;
