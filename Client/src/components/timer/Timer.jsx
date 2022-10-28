import React from "react";
import "./Timer.css";
const Timer = (props) => {
	return (
		<>
			<div className="counter-container">
				<h2>Upcoming Events</h2>
				<div className="counter">
					<h2>{props.title}</h2>

					<div className="counter-timer">
						<div className="timer-field">{props.day}<h6>Days</h6></div>
						<div className="timer-field">{props.hour}<h6>Hours</h6></div>
						<div className="timer-field">{props.min}<h6>Mins</h6></div>
						<div className="timer-field">{props.sec}<h6>Seconds</h6></div>
					</div>
					<button className="register-button"><a href={props.link}>{props.status}</a></button>
				</div>
			</div>
		</>
	);
};

export default Timer;
