import React, { useState } from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { allSections } from "../../data/sections";
import "./Directory.styles.scss";

const Directory = () => {
	const [sections, setSections] = useState(allSections);

	return (
		<div className="directory">
			{sections.map(({ title, imageUrl, id, size }) => (
				<DirectoryItem key={id} title={title} imageUrl={imageUrl} size={size} />
			))}
		</div>
	);
};

export default Directory;
