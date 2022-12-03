import React from "react";
import "./Events.css";
import CountUp from "react-countup";
import Timer from "../../components/timer/Timer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Aib1 from "../../assets/aib1.jpeg";
import Ts from "../../assets/ts.jpeg";
import Ts2 from "../../assets/ts2.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const Events = () => {
	const [title, setTitle] = useState();
	const [link, setLink] = useState();
	const [buttonStatus, setButtonStatus] = useState("Register");

	const [date, setDate] = useState("");
	const [timerDays, setTimerDays] = useState();
	const [timerHours, setTimerHours] = useState();
	const [timerMins, setTimerMins] = useState();
	const [timerSecs, setTimerSecs] = useState();

	const url = "/timer/gettimer";

	useEffect(() => {
		const getrepo = async () => {
			try {
				const response = await axios.get(url);
				const data = response.data.timer[0];
				setTitle(data.timer_title);
				setLink(data.timer_link);
				setDate(data.timer_time);

				let interval;

				const countdownDate = new Date(Date.parse(data.timer_time)).getTime();
				console.log(countdownDate);

				interval = setInterval(() => {
					const now = Date.now();
					const distance = countdownDate - now;

					const days = Math.floor(distance / (24 * 60 * 60 * 1000));
					const hours = Math.floor(
						(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
					);
					const mins = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
					const secs = Math.floor((distance % (60 * 1000)) / 1000);

					if (distance < 0) {
						clearInterval(interval.current);
						setTimerDays(0);
						setTimerHours(0);
						setTimerMins(0);
						setTimerSecs(0);
						setLink(null);
						setButtonStatus("Closed");
					} else {
						setTimerDays(days);
						setTimerHours(hours);
						setTimerMins(mins);
						setTimerSecs(secs);
					}
				}, interval);
			} catch (error) {
				console.log(error);
			}
		};
		getrepo();
		//starttimer()
	}, [url]);
	return (
		<>
			<section className="event-landing">
				<div className="event-main">
					<div data-aos="fade-right" className="event-main-left">
						<h1>
							Our <span className="gradient-bg">Events</span>
						</h1>
						<p className="event-desc">
							ISTE Manipal is well known for hosting various internal/external
							workshops, webinars, and crash courses which help our members'
							overall development in several technical fields. Fun-filled
							events, the best guidance and interactions with various mentors,
							and soft skills are part of the club.
						</p>
					</div>
					<div data-aos="zoom-in" className="event-main-right">
						<Timer
							title={title}
							day={timerDays}
							hour={timerHours}
							min={timerMins}
							sec={timerSecs}
							link={link}
							status={buttonStatus}
						/>
					</div>
				</div>
				<div data-aos="fade-up" className="number-container" id="no-container">
					<div className="number">
						<CountUp end={1147} duration={2} className="number-no" />
						<div className="number-text">Participants</div>
					</div>
					<div className="number noborder">
						<CountUp end={875} duration={2} className="number-no  " />
						<span className="number-no"> +</span>
						<div className="number-text">Submissions</div>
					</div>
					<div className="number">
						<CountUp end={500} duration={2} className="number-no" />
						<span className="number-no"> +</span>
						<div className="number-text">Certificates Given</div>
					</div>
					<div className="number noborder nob">
						<CountUp end={63} duration={2} className="number-no" />
						<div className="number-text">Events Organised</div>
					</div>
				</div>
			</section>
			<div data-aos="zoom-in" className="carousel">
				<Carousel
					infiniteLoop
					autoPlay
					showThumbs={false}
					showStatus={false}
					className="carousel-cat"
				>
					<div className="carousel-img">
						<img src={Ts} alt="" />
					</div>
					<div className="carousel-img">
						<img src={Aib1} alt="" />
					</div>
					<div className="carousel-img">
						<img src={Ts2} alt="" />
					</div>
				</Carousel>
			</div>
		</>
	);
};

export default Events;
