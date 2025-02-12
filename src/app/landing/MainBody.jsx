import React from "react";
import rightArrow from "../../assets/right-arrow.svg";
import ProjectCard from "../../components/ProjectCard";

import "./MainBody.css";
import YellowBorder from "../../components/YellowBorder";

const MainBody = () => {
	const linkedInProjectObj = {
		title: "The LinkedIn Microservice Project",
		description: "This is a clone of the LinkedIn application",
		gitHubLink: "https://github.com/rudradcruze/linkedin-clone",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/2560px-LinkedIn_2021.svg.png",
	};

	return (
		<main>
			<h2 className='nameHeading'>My name is Francis Rudra D Cruze</h2>

			<ol>
				<li>I like React Programming</li>
				<li>I like Vite also, webpack not so much</li>
				<li>Let's build some interactive React Projects!</li>
			</ol>

			<section className='projects-section'>
				<YellowBorder>
					<h2>These are my projects</h2>
				</YellowBorder>
				<p>I build high quality projects of all shapes and size</p>

				<div className='project-container'>
					<ProjectCard
						title='Uber Clone Application'
						description='This is a clone of the Uber application'
						gitHubLink='https://github.com/rudradcruz/uberApp'
						imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/220px-Uber_logo_2018.svg.png'
					/>
					<ProjectCard
						title='AirBnb Hotel Booking Clone'
						description='This is a clone of the AirBnb application'
						gitHubLink='https://github.com/rudradcruz/airbnb-clone'
						imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/220px-Airbnb_Logo_B%C3%A9lo.svg.png'
					/>
					<ProjectCard {...linkedInProjectObj} />
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
