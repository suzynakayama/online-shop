import React from "react";
import { withRouter } from "react-router-dom"; //is a HOC (function that takes a component as argument, modifies 																										it and returns it)
import "./DirectoryItem.styles.scss";

const DirectoryItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	const handleClick = () => {
		history.push(`${match.url}${linkUrl}`);
	};

	return (
		<div className={`${size} directory__item`} onClick={handleClick}>
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(DirectoryItem);
