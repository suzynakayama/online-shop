import React from "react";
// import "./HomePage.styles.scss";
import Directory from "../../components/Directory/Directory";
import { HomePageContainer, HomePageTitle } from "./HomePage.styles";
import Footer from "react-myfooter";

const HomePage = () => {
	console.log(typeof Footer);
	return (
		// <div className="homepage">
		<HomePageContainer>
			<HomePageTitle>MyShop</HomePageTitle>
			{/* <h1 className="homepage__title">MyShop</h1> */}
			<br />
			<Directory />
			<Footer github="https://github.com/suzynakayama" name="Suzy Nakayama" />
		</HomePageContainer>
		// </div>
	);
};

export default HomePage;
