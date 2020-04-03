import React from "react";
import "./DirectoryItem.styles.scss";

const DirectoryItem = ({ title, imageUrl, size }) => {
	return (
		<div className={`${size} directory__item`}>
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default DirectoryItem;
