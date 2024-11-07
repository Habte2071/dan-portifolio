import React from "react";
import Image from "next/image";
import movieImg from "../public/assets/projects/home.png"; // Use your actual image path
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Portfolio = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={movieImg}
					alt="Portfolio"
				/>
				<div className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white z-10 p-2">
					<h2 className="py-2 text-3xl font-bold animate-bounce">My Portfolio</h2>
					<p className="text-lg">React.js | Next.js</p>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="text-lg font-semibold">Project Overview</p>
					<p className="mt-2">
						My portfolio is a dynamic web application designed to showcase my skills and projects in web development. It demonstrates my proficiency in integrating modern web technologies to create an engaging and seamless user experience. Visitors can explore a selection of my work, each illustrating my commitment to quality and attention to detail.
					</p>
					<h3 className="mt-4 font-semibold">Key Features:</h3>
					<ul className="list-disc list-inside mt-2">
						<li>Responsive Design: Fully functional on both desktop and mobile devices.</li>
						<li>Dynamic Project Display: Users can browse through various projects with detailed descriptions.</li>
						<li>User-Friendly Interface: An intuitive layout that enhances navigation and overall experience.</li>
					</ul>
					<h3 className="mt-4 font-semibold">Technologies Used:</h3>
					<ul className="list-disc list-inside mt-2">
						<li>React.js: For building a modular and interactive user interface.</li>
						<li>Next.js: To optimize performance with server-side rendering and static site generation.</li>
						<li>Tailwind CSS: For rapid styling and maintaining a consistent design aesthetic.</li>
					</ul>
					<div className="mt-4">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Habte2071"
						>
							<button className="px-8 py-2 mr-4 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200">Code</button>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Habte2071"
						>
							<button className="px-8 py-2 text-white bg-green-600 rounded-md hover:bg-green-500 transition duration-200">Demo</button>
						</a>
					</div>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								React.js
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Next.js
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Tailwind CSS
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<div className="mt-4">
						<button className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition duration-200 animate-pulse">Back</button>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;