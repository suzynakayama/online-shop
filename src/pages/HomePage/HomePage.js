import React from "react";
import "./HomePage.styles.scss";
import Directory from "../../components/Directory/Directory";

const HomePage = () => {
	return (
		<div className="homepage">
			<h1>MyShop</h1>
			<br />
			<Directory />
		</div>
	);
};

export default HomePage;
