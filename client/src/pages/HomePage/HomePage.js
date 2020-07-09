import React, { Profiler } from "react";
// import "./HomePage.styles.scss";
import Directory from "../../components/Directory/Directory";
import { HomePageContainer, HomePageTitle } from "./HomePage.styles";
import Footer from "react-myfooter";

const HomePage = () => {
	return (
		// <div className="homepage">
		<HomePageContainer>
			<HomePageTitle>MyShop</HomePageTitle>
			{/* <h1 className="homepage__title">MyShop</h1> */}
			<br />
			<Profiler id="Directory" onRender={ (id, phase, actualDuration) => {console.log({
				id,
				phase,
				actualDuration
			}) }}>
				<Directory />
			</Profiler>
			<br />
			<Footer github="https://github.com/suzynakayama" name="Suzy Nakayama" />
		</HomePageContainer>
		// </div>
	);
};

export default HomePage;
