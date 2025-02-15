import React from "react";

import "./TechStackCard.css";

function TechStackCard({ name, imageUrl }) {
	return (
		<div className='techstack-card'>
			<img src={imageUrl} alt={name} />
		</div>
	);
}

export default TechStackCard;
