import React from "react";

function YellowBorder({ children }) {
	const yellowBorderStyles = {
		border: "2px solid yellow",
		padding: "1rem",
		borderRadius: "0.5rem",
	};
	return <div style={yellowBorderStyles}>{children}</div>;
}

export default YellowBorder;
