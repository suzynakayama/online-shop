import React, { useState } from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { allSections } from "../../data/sections";
import "./Directory.styles.scss";

const Directory = () => {
	const [sections, setSections] = useState(allSections);

	return (
		<div className="directory">
			{sections.map(({ id, ...otherSectionProps }) => (
				<DirectoryItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

export default Directory;
