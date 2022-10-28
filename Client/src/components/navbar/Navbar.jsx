import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";
// import Home from "../../pages/home/Home";
// import Events from "../../pages/events/Events";
// import Acumen from "../../pages/acumen/Acumen";
// import Members from "../../pages/members/Members";
const Navbar = () => {
	const [click, setClick] = useState(false);
	const [navbar, setNavbar] = useState(false);
	const handleClick = () => setClick(!click);
	const changeBackground = () => {
		if (window.scrollY >= 50) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener("scroll", changeBackground);
	return (
		<>
			<div className={navbar ? "navbar active" : "navbar"}>
				<img src={Logo} alt="ISTE-Logo" className="nav-logo" />
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links">
							Home
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/events" className="nav-links">
							Events
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/acumen" className="nav-links">
							Acumen
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/members" className="nav-links">
							Members
						</Link>
					</li>
				</ul>
				<div className="hamburger" onClick={handleClick}>
					{click ? (
						<FaTimes className="icon-hamburger" />
					) : (
						<FaBars className="icon-hamburger" />
					)}
				</div>
			</div>
		</>
	);
	// return (
	// 	<div className="navbar">
	// 		<div className="logo">LOGO</div>
	// 		<Link to="/">Home</Link>
	// 		<Link to="/events">Events</Link>
	// 		<Link to="/acumen">Acumen</Link>
	// 		<Link to="/members">Members</Link>
	// 	</div>
	// );
};

export default Navbar;
