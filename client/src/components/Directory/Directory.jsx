import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { connect } from "react-redux";
import "./Directory.styles.scss";
import { selectDirectorySections } from "../../redux/directory/DirectorySelectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
	return (
		<div className="directory">
			{sections.map(({ id, ...otherSectionProps }) => (
				<DirectoryItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
