import React from "react";
import "./HomePage.styles.scss";
import Directory from "../../components/Directory/Directory";

const HomePage = () => {
	return (
		<div className="homepage">
			<h1>Welcome to my HomePage</h1>
			<Directory />
		</div>
	);
};

export default HomePage;
