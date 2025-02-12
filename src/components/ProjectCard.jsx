import React from "react";
import "./ProjectCard.css";

import githubIcon from "../assets/github.svg";

const ProjectCard = () => {
	return (
		<div className='project-card'>
			<div className='img-wrapper'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/220px-Uber_logo_2018.svg.png'
					alt='Uber'
					srcset=''
				/>
			</div>
			<h3>User Clone Application</h3>
			<p>
				In this uber clone project, I created backend of a Ride-Sharing
				application
			</p>

			<a className='card-button' href='#'>
				<img src={githubIcon} alt='GitHub' />
				<span>View on GitHub</span>
			</a>
		</div>
	);
};

export default ProjectCard;
