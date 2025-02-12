import React from "react";
import rightArrow from "../../assets/right-arrow.svg";
import ProjectCard from "../../components/ProjectCard";

import "./MainBody.css";

const MainBody = () => {
	return (
		<main>
			<h2 className='nameHeading'>My name is Francis Rudra D Cruze</h2>

			<ol>
				<li>I like React Programming</li>
				<li>I like Vite also, webpack not so much</li>
				<li>Let's build some interactive React Projects!</li>
			</ol>

			<section className='projects-section'>
				<h2>These are my projects</h2>
				<p>I build high quality projects of all shapes and size</p>

				<div className='project-container'>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</section>

			<a href='#' className='hireMeBtn'>
				<span>Hire Me</span>
				<img src={rightArrow} alt='->' />
			</a>
		</main>
	);
};

export default MainBody;
