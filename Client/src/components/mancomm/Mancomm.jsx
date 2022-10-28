import React from "react";
import Membersnav from "../membersnav/Membersnav";
import "../../pages/members/Members.css";
import "./Mancomm.css";
import { useState, useEffect } from "react";
import axios from "axios";

import MembersName from "../membersname/MembersName";
const Mancomm = () => {
	const [myrepo, SetRepo] = useState([]);
	const url = "/MCWC/getMC";

	useEffect(() => {
		const getrepo = async () => {
			try {
				const response = await axios.get(url);
				console.log(response);
				const data = response.data;
				SetRepo(data);
			} catch (error) {
				console.log(error);
			}
		};
		getrepo();
	}, [url]);


	return (
		<>
			<section className="members-container">
				<Membersnav />
				<div className="mancomm">
					<h1>List of mancomm</h1>
				</div>
				<div className="members-list">
					<div className="members-list-card">
						{myrepo.map((MC)=>{
							return(
								<MembersName name={MC.name} />
							)
						})}
						{/* <MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" />
						<MembersName name="FirstName LastName" /> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default Mancomm;
