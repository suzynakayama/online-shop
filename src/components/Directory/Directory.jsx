import React, { useState } from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import SECTIONS_DATA from "../../data/sections";
import "./Directory.styles.scss";

const Directory = () => {
	const [sections, setSections] = useState(SECTIONS_DATA);

	return (
		<div className="directory">
			{sections.map(({ id, ...otherSectionProps }) => (
				<DirectoryItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

export default Directory;
