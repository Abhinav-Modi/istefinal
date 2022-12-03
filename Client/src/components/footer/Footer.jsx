import React from "react";
import "./Footer.css";
import OldLogo from "../../assets/oldlogo.svg";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import Manipal from "../../assets/manipal.png";
const Footer = () => {
	var year = new Date().getFullYear();
	return (
		<>
			<div className="footer-pc">
				<section className="footer-container">
					<div className="footer-left ">
						<div className="text">
							<h1 className="gradient-text">ISTE</h1>{" "}
							<h1 className="manipal">Manipal </h1>
						</div>
						<div className="socials">
							<a href="https://www.facebook.com/istemanipal" target="_blank">
								<BsFacebook className="social-icon" />
							</a>
							<a
								href="https://instagram.com/iste_manipal?igshid=YmMyMTA2M2Y="
								target="_blank"
							>
								<BsInstagram className="social-icon" />
							</a>
							<a
								href="https://www.linkedin.com/company/iste-manipal/"
								target="_blank"
							>
								<BsLinkedin className="social-icon" />
							</a>
						</div>
					</div>

					<div className="footer-right">
						<div className="footer-right-wrapper">
							<div className="footer-links">
								<div className="links-section">
									<ul>
										<li>
											<Link to={"/"} className="footer-link footer-main">
												Home
											</Link>
										</li>
										<li>
											<Link to={"/acumen"} className="footer-link footer-main">
												Acumen
											</Link>
										</li>
										<li>
											<Link to={"/events"} className="footer-link  footer-main">
												Events
											</Link>
										</li>
										<li>
											<Link
												to={"/members"}
												className="footer-link  footer-main"
											>
												Members
											</Link>
										</li>
									</ul>
								</div>
								<div className="links-section">
									<img src={OldLogo} alt="ISTE-Logo" />
								</div>
								<div className="links-section">
									<img src={Manipal} alt="ISTE-Logo" id="manipal" />
								</div>
							</div>
						</div>
					</div>
					<div className="copyright">
						<p>Copyright © {year} All rights reserved | Made by ISTE Manipal</p>
					</div>
				</section>
			</div>
			<div className="footer-mobile">
				<div className="footer-mobile-wrapper">
					<div className="footer-mobile-links">
						<ul>
							<li>
								<Link to={"/"} className="footer-link footer-main">
									Home
								</Link>
							</li>
							<li>
								<Link to={"/acumen"} className="footer-link footer-main">
									Acumen
								</Link>
							</li>
							<li>
								<Link to={"/events"} className="footer-link footer-main">
									Events
								</Link>
							</li>
							<li>
								<Link to={"/members"} className="footer-link footer-main">
									Members
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer-mobile-down ">
						<div className="text">
							<h1 className="gradient-text">ISTE</h1>{" "}
							<h1 className="manipal">Manipal </h1>
						</div>
						<div className="footer-mobile-right">
							<h1>Follow Us</h1>
							<div className="socials">
								<a href="https://www.facebook.com/istemanipal" target="_blank">
									<BsFacebook className="social-icon" id="facebook" />
								</a>
								<a
									href="https://instagram.com/iste_manipal?igshid=YmMyMTA2M2Y="
									target="_blank"
								>
									<BsInstagram className="social-icon" id="insta" />
								</a>
								<a
									href="https://www.linkedin.com/company/iste-manipal/"
									target="_blank"
								>
									<BsLinkedin className="social-icon" id="linkedin" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
