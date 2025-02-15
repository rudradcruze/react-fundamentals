import React from "react";
import rightArrow from "../../assets/right-arrow.svg";
import ProjectCard from "../../components/ProjectCard";

import "./MainBody.css";
import YellowBorder from "../../components/YellowBorder";
import TechStackCard from "../../components/TechStackCard";

const MainBody = () => {
	const projectList = [
		{
			title: "Uber Clone Application",
			description: "This is a clone of the Uber application",
			gitHubLink: "https://github.com/rudradcruz/uberApp",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/220px-Uber_logo_2018.svg.png",
		},
		{
			title: "AirBnb Hotel Booking Clone",
			description: "This is a clone of the AirBnb application",
			gitHubLink: "https://github.com/rudradcruz/airbnb-clone",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/220px-Airbnb_Logo_B%C3%A9lo.svg.png",
		},
		{
			title: "The LinkedIn Microservice Project",
			description: "This is a clone of the LinkedIn application",
			gitHubLink: "https://github.com/rudradcruze/linkedin-clone",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/2560px-LinkedIn_2021.svg.png",
		},
	];

	const techStackList = [
		{
			name: "React",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
		},
		{
			name: "Tailwind CSS",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
		},
		{
			name: "ShadCN Ui",
			imageUrl:
				"https://images.seeklogo.com/logo-png/51/2/shadcn-ui-logo-png_seeklogo-519786.png",
		},
		{
			name: "Spring Boot",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png",
		},
		{
			name: "Kubernetes",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2560px-Kubernetes_logo_without_workmark.svg.png",
		},
		{
			name: "PostgreSQL",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/2560px-Postgresql_elephant.svg.png",
		},
		{
			name: "MySQL",
			imageUrl: "https://pngimg.com/uploads/mysql/mysql_PNG23.png",
		},
		{
			name: "Kafka",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Apache_Kafka_logo.svg/1200px-Apache_Kafka_logo.svg.png",
		},
		{
			name: "Redis",
			imageUrl:
				"https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png",
		},
	];

	// const fruits = ["Apple", "Banana", "Cherry"];

	return (
		<main>
			<h2 className='nameHeading'>My name is Francis Rudra D Cruze</h2>

			<ol>
				<li>I like React Programming</li>
				<li>I like Vite also, webpack not so much</li>
				<li>Let's build some interactive React Projects!</li>
			</ol>

			{/* <ul>
				{fruits.map((fruit) => (
					<li>{fruit}</li>
				))}
			</ul> */}

			<section className='projects-section'>
				<YellowBorder>
					<h2>These are my projects</h2>
				</YellowBorder>
				<p>I build high quality projects of all shapes and size</p>

				<div className='project-container'>
					{projectList.map((project) => (
						<ProjectCard {...project} key={project.title} />
					))}
				</div>
			</section>

			<a href='#' className='hireMeBtn'>
				<span>Hire Me</span>
				<img src={rightArrow} alt='->' />
			</a>

			<section className='tech-stack-container'>
				<h2>Technologies that I know</h2>
				<p>
					I have listed some of muy top skills here, I know more
					ofcourse
				</p>
				<div className='techstack-container'>
					{techStackList.map((techStack) => (
						<TechStackCard {...techStack} key={techStack.name} />
					))}
				</div>
			</section>
		</main>
	);
};

export default MainBody;
