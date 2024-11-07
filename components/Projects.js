import React from "react";
import ProjectItem from "./ProjectItem";
import foodImg from "../public/assets/projects/clearance.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import movieImg from "../public/assets/projects/home.png";
import twitchImg from "../public/assets/projects/exam.jpg";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl uppercase tracking-widest text-[#1E90FF]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Book store management system"
						backgroundImg={cryptoImg}
						projectUrl="/Book"
						tech="WEBSITE"
					/>
					<ProjectItem
						title="Exam management system"
						backgroundImg={twitchImg}
						projectUrl="/twitch"
						tech="WEBSITE"
					/>
					<ProjectItem
						title="my portifolio"
						backgroundImg={movieImg}
						projectUrl="/moviepedia"
						tech="WEBSITE"
					/>
					<ProjectItem
						title="Clearance management system for JJU"
						backgroundImg={foodImg}
						projectUrl="/food"
						tech="WEBSITE"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
