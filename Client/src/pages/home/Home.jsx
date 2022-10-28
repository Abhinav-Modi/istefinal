import React from "react";
import "./Home.css";
import DomainCard from "../../components/domaincard/DomainCard";
import web from "../../assets/web.svg";
import app from "../../assets/app.svg";
import graphic from "../../assets/graphic.svg";
import content from "../../assets/content.svg";
import hr from "../../assets/hr.svg";
import { MdLocationOn } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import CountUp from "react-countup";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
	const [state, setState] = useState({
		name: "",
		email: "",
		body: "",
	});
	const handleChange = (e) => {
		setState({
			[e.target.name]: e.target.value,
			[e.target.email]: e.target.value,
			[e.target.body]: e.target.body,
		});
	};
	const url = "/email/postemail";
	const message = () => {
		alert("Message Sent Successfully!!!");
	};
	const sendmail = async (e) => {
		e.preventDefault();
		window.alert("Your message has been sent");
		await axios
			.post(url, state)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<div className="home">
				<div className="main">
					<section className="banner-container">
						<div data-aos="fade-right" className="banner-left">
							<p id="welcome">Welcome to</p>
							<h1 className="gradient-text">ISTE</h1>
							<p id="full-form" className="gradient-text left-margin">
								Indian Society for Technical Education
							</p>
							<p id="chapter" className="left-margin">
								<span className="gradient-text">Manipal</span> Students' Chapter
							</p>
							<p id="club-desc" className="left-margin">
								Manipal’s largest multi-disciplinary technical student club
							</p>
						</div>
						<div className="banner-right nodisplay">
							<div class="cube">
								<div class="top">
									<img src={hr} alt="" />
								</div>
								<div>
									<span style={{ "--i": 0 }}>
										<img src={web} alt="" />
									</span>
									<span style={{ "--i": 1 }}>
										<img src={app} alt="" />
									</span>
									<span style={{ "--i": 2 }}>
										<img src={graphic} alt="" />
									</span>
									<span style={{ "--i": 3 }}>
										<img src={web} alt="" />
									</span>
									<span style={{ "--i": 4 }}>
										<img src={content} alt="" />
									</span>
								</div>
							</div>
						</div>
					</section>
					{/* number */}
					<section data-aos="fade-up" className="number-container">
						<div className="number">
							<CountUp end={5} duration={2} className="number-no" />
							<div className="number-text">Domains</div>
						</div>
						<div className="number noborder">
							<CountUp end={5} duration={2} className="number-no" />
							<span className="number-no"> +</span>
							<div className="number-text">Years</div>
						</div>
						<div className="number">
							<CountUp end={50} duration={2} className="number-no" />
							<span className="number-no"> +</span>
							<div className="number-text">Events</div>
						</div>
						<div className="number noborder nob">
							<CountUp end={150} duration={2} className="number-no" />
							<span className="number-no"> +</span>
							<div className="number-text">Members</div>
						</div>
					</section>
				</div>
				<section className="about-us-container" id="about">
					<h1 data-aos="zoom-out-right">
						About <span className="gradient-bg">Us</span>
					</h1>
					<div className="questions">
						<div className="about-left">
							<h2 data-aos="fade-down">Who are we?</h2>
							<p data-aos="fade-right">
								ISTE Manipal is one of the branches of the nationwide Indian
								Society of Technical Education. It is Manipal's most reputed and
								esteemed multi-disciplinary technical club.
							</p>
						</div>
						<div className="about-right">
							<h2 data-aos="fade-down" id="q2">
								What do we do?
							</h2>
							<p data-aos="fade-left">
								ISTE Manipal is one of the branches of the nationwide Indian
								Society of Technical Education. It is Manipal's most reputed and
								esteemed multi-disciplinary technical club.
							</p>
						</div>
					</div>
				</section>

				{/* Domains */}
				<div className="clear"></div>
				<section className="domains-container">
					<h1 data-aos="zoom-out-left">
						Our <span className="gradient-bg">Domains</span>
					</h1>
					<p data-aos="fade-up">
						Being a multi-disciplinary club, we have members for domains in some
						of the primary fields of technical education. The management team
						looks after the overall functioning of the club and its events.
					</p>
					<div className="domain-card-container">
						<div data-aos="fade-left" className="domain-card-col">
							<DomainCard
								img={app}
								domain="App Development"
								className="dmcard"
							/>
						</div>
						<div data-aos="fade-left" className="domain-card-col">
							<DomainCard
								img={web}
								domain="Web Development"
								className="dmcard"
							/>
						</div>
						<div data-aos="fade" className="domain-card-col">
							<DomainCard
								img={graphic}
								domain="Graphic Design"
								className="dmcard"
							/>
						</div>
						<div data-aos="fade-right" className="domain-card-col">
							<DomainCard
								img={content}
								domain="Content Writing"
								className="dmcard"
							/>
						</div>
						<div data-aos="fade-right" className="domain-card-col center-card">
							<DomainCard img={hr} domain="HR and Management" />
						</div>
					</div>
				</section>

				{/* contact */}
				<section className="contact-container">
					<h1 data-aos="zoom-out-right">
						Get in <span className="gradient-bg">Touch</span>
					</h1>
					{/* <div className="contact-div">
						<div data-aos="fade-right" className="left">
							<input
								type="text"
								placeholder="Name"
								value={state.name}
								onChange={handleChange}
							/>
							<input
								type="email"
								placeholder="Email"
								value={state.email}
								onChange={handleChange}
							/>
						</div>
						<div data-aos="fade-left" className="right">
							<textarea
								name="Message"
								id=""
								cols="60"
								rows="15"
								placeholder="Message"
								value={state.body}
								onChange={handleChange}
							></textarea>
							<button
								type="submit"
								onSubmit={sendmail}
								data-aos="fade-left"
								className="register-button contact-button"
							>
								Send
							</button>
						</div>
					</div> */}
					<div>
						<form className="contact-div" onSubmit={message}>
							<div data-aos="fade-right" className="left">
								<input
									value={state.name}
									onChange={handleChange}
									placeholder="Name"
									type="text"
									name="Name"
									required
								/>

								<input
									value={state.email}
									onChange={handleChange}
									placeholder="Email address"
									type="email"
									name="email"
									required
								/>
								<div className="icons">
									<div className="icon-div">
										<MdLocationOn className="icon" />
										<p className="icon-text">MIT Manipal, Karnataka</p>
									</div>
									<div className="icon-div">
										<FiMail className="icon" />
										<p>istemanipalboard@gmail.com</p>
									</div>
								</div>
							</div>
							<div data-aos="fade-left" className="right">
								<textarea
									name="Message"
									id=""
									cols="60"
									rows="15"
									placeholder="Message"
									value={state.body}
									onChange={handleChange}
								></textarea>
								<button
									type="submit"
									onSubmit={sendmail}
									data-aos="fade-left"
									data-aos-offset="-200"
									className="register-button contact-button"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;
