import React from "react";
// import "./HomePage.styles.scss";
import Directory from "../../components/Directory/Directory";
import { HomePageContainer, HomePageTitle } from "./HomePage.styles";

const HomePage = () => {
	return (
		// <div className="homepage">
		<HomePageContainer>
			<HomePageTitle>MyShop</HomePageTitle>
			{/* <h1 className="homepage__title">MyShop</h1> */}
			<br />
			<Directory />
		</HomePageContainer>
		// </div>
	);
};

export default HomePage;
