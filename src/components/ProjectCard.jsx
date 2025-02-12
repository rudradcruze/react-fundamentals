import React from "react";
import "./ProjectCard.css";

import githubIcon from "../assets/github.svg";

const ProjectCard = ({
	title,
	description,
	imageUrl = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
	gitHubLink = "https://github.com/rudradcruze/",
	children,
}) => {
	return (
		<div className='project-card'>
			<div className='img-wrapper'>
				<img src={imageUrl} alt={"Project Img" + title} />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>

			<a className='card-button' href={gitHubLink}>
				<img src={githubIcon} alt='GitHub' />
				<span>View on GitHub</span>
			</a>
		</div>
	);
};

export default ProjectCard;
