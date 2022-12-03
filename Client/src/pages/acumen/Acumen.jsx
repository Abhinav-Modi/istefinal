import React from "react";
import "./Acumen.css";
import AcumenImg from "../../assets/acumen.svg";
import AcumenCard from "../../components/acumencard/AcumenCard";
import { useEffect, useState } from "react";
import axios from "axios";
const Acumen = () => {
	const [myrepo, SetRepo] = useState([]);
	const url = "/acumen/getallacumen";

	useEffect(() => {
		const getrepo = async () => {
			try {
				const response = await axios.get(url);
				console.log(response);
				const data = response.data.body;
				SetRepo(data);
			} catch (error) {
				console.log(error);
			}
		};
		getrepo();
	}, [url]);
	return (
		<>
			<div className="acumen">
				<section className="acumen-center">
					<div className="acumen-landing">
						<div data-aos="zoom-in" className="acumen-left">
							<img src={AcumenImg} alt="" className="acumen-img" id="ac-img" />
						</div>
						<div data-aos="fade-left" className="acumen-right">
							<h1>ACUMEN</h1>
							<p className="acumen-desc1">
								One of the highest participating categories of TechTatva,
								organised by ISTE Manipal
							</p>
							<p className="acumen-desc2">
								Acumen provides a platform for aptitude and intellect. The
								events require participants to showcase skills like critical
								analysis and out-of-the-box thinking to slice through complex
								problems, treasure hunts, and puzzles.
							</p>
						</div>
					</div>
				</section>
				<section className="acumen-events-section">
					<h1>Events</h1>
					<div className="acumen-cards-row">
						{myrepo.map((acumen) => {
							return (
								<div data-aos="fade-left">
									<AcumenCard
										key={acumen._id}
										title={acumen.event_name}
										desc={acumen.event_description}
									/>
								</div>
							);
						})}

						{/* <div data-aos="fade-left">
							<AcumenCard
								title="AIB"
								desc="Show your love for technology in this exciting tech quiz. We test participants on their ability to deduce solutions to problems from basic knowledge of science and technology."
							/>
						</div>
						<div data-aos="fade-right">
							<AcumenCard
								title="MIQ"
								desc="Manipal’s Intelligence Quotient exercises participants' IQ in a maze of puzzles. Wake up the Garry Kasparov in yourself to make calculated moves through a series of puzzles and games."
							/>
						</div>
						<div data-aos="fade-right">
							<AcumenCard
								title="Hopeless Opus"
								desc="This online story-based event introduces you to a world where you make different choices. A fun event that tests your knowledge of campus and makes you scratch your head."
							/>
						</div> */}
					</div>
				</section>
			</div>
		</>
	);
};

export default Acumen;
