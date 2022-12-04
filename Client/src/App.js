import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Events from "./pages/events/Events";
import Acumen from "./pages/acumen/Acumen";
import Members from "./pages/members/Members";
import Footer from "./components/footer/Footer";
import Mancomm from "./components/mancomm/Mancomm";
import WorkingComittee from "./components/workingcomittee/WorkingComittee";
import ScrollToTop from "./components/ScrollToTop";
import Aos from "aos";
import "aos/dist/aos.css";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
		Aos.init({ disable: "mobile" });
	}, []);
	// const disableAos = () => {
	// 	if (window.innerWidth < 768) {
	// 		Aos.init({ disable: true });
	// 	}
	// };
	// disableAos();

	return (
		<>
			<SkeletonTheme baseColor="#313131" highlightColor="#525252">
				<Router>
					<ScrollToTop />
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/events" element={<Events />} />
						<Route path="/acumen" element={<Acumen />} />
						<Route path="/members" element={<Members />} />
						<Route path="/members/mc" element={<Mancomm />} />
						<Route path="/members/wc" element={<WorkingComittee />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
					<Footer />
				</Router>
			</SkeletonTheme>
		</>
	);
};

export default App;
