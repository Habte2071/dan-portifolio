import React from "react";
import Image from "next/image";
import foodImg from "../public/assets/projects/food-app.jpg"; // Replace with the actual image for your project
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Property = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={foodImg}
					alt="Clearance Management System"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white z-10 p-2">
					<h2 className="py-2 text-3xl font-bold animate-bounce">Clearance Management System</h2>
					<p className="text-lg">HTML | CSS | JavaScript | PHP | MySQL</p>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="text-lg font-semibold">Project Overview</p>
					<p className="mt-2">
						The Clearance Management System is an innovative web application designed to streamline the clearance process for students at Jigjiga University. This system simplifies the management of student clearances, ensuring a more efficient and transparent procedure for both students and administrative staff.
					</p>
					<h3 className="mt-4 font-semibold">Technologies Used:</h3>
					<ul className="list-disc list-inside mt-2">
						<li>HTML: For structuring the web pages, ensuring a clean and user-friendly interface.</li>
						<li>CSS: To enhance the visual appeal of the application with a responsive design.</li>
						<li>JavaScript: For dynamic interactions, improving user experience through real-time validations.</li>
						<li>PHP: As the server-side scripting language for handling requests and managing sessions securely.</li>
						<li>MySQL: For efficient data storage and retrieval.</li>
					</ul>
					<h3 className="mt-4 font-semibold">Features:</h3>
					<ul className="list-disc list-inside mt-2">
						<li>User Authentication: Secure login for students and administrative staff.</li>
						<li>Clearance Tracking: Allows students to monitor their clearance status in real-time.</li>
						<li>Administrative Dashboard: Tools for managing clearances and student records.</li>
						<li>Notification System: Alerts students about their clearance status and required actions.</li>
						<li>Data Security: Robust measures to protect user data and comply with regulations.</li>
					</ul>
					<h3 className="mt-4 font-semibold">Impact:</h3>
					<p className="mt-2">
						The system significantly reduces the time and effort required for students to obtain clearances while streamlining administrative processes. By digitizing the clearance workflow, Jigjiga University enhances operational efficiency and improves the student experience.
					</p>
					<div className="mt-4">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Habte2071"
						>
							<button className="px-8 py-2 mt-4 mr-8 text-white bg-[#1E90FF] rounded-md hover:bg-[#1A77CC] transition duration-200">
								Code
							</button>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Habte2071"
						>
							<button className="px-8 py-2 mt-4 text-white bg-[#1E90FF] rounded-md hover:bg-[#1A77CC] transition duration-200">
								Demo
							</button>
						</a>
					</div>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							{["HTML", "CSS", "JavaScript", "PHP", "API", "MySQL"].map((tech) => (
								<p key={tech} className="text-gray-600 py-2 flex items-center">
									<RiRadioButtonFill className="pr-1" />
									{tech}
								</p>
							))}
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								GitHub Pages
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<div className="mt-4">
						<button className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition duration-200 animate-pulse">
							Back
						</button>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Property;