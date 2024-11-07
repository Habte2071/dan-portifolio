import React from "react";
import Image from "next/image";
import examImage from "../public/assets/projects/exam.jpg"; // Use your actual image path
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ExamManagementSystem = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={examImage}
					alt="Exam Management System"
				/>
				<div className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white z-10 p-2">
					<h2 className="py-2 text-3xl font-bold animate-bounce">Exam Management System</h2>
					<p className="text-lg">Next.js | Tailwind | NextAuth</p>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="text-lg font-semibold">Project Overview</p>
					<p className="mt-2">
						The Exam Management System is a comprehensive web application designed to streamline the process of conducting, managing, and evaluating examinations in educational institutions. This platform enhances the efficiency of exam administration, providing a user-friendly interface for both administrators and students.
					</p>
					<h3 className="mt-4 font-semibold">Key Features:</h3>
					<ul className="list-disc list-inside mt-2">
						<li>User Authentication: Secure login for administrators, teachers, and students.</li>
						<li>Exam Creation and Management: Easy creation, editing, and management of exams.</li>
						<li>Question Bank: A repository for storing questions with randomization features.</li>
						<li>Real-time Monitoring: Instructors can monitor exam progress live.</li>
						<li>Automated Grading: Instant feedback through automated grading for certain question types.</li>
						<li>Detailed Reporting: Comprehensive analytics on exam performance.</li>
						<li>Responsive Design: Fully accessible on desktops, tablets, and smartphones.</li>
					</ul>
					<h3 className="mt-4 font-semibold">Technologies Used:</h3>
					<ul className="list-disc list-inside mt-2">
						<li>Frontend: React.js</li>
						<li>Backend: Node.js, Express</li>
						<li>Database: MongoDB</li>
						<li>Authentication: JWT</li>
						<li>Deployment: Heroku</li>
					</ul>
					<h3 className="mt-4 font-semibold">Impact:</h3>
					<p className="mt-2">
						This system significantly reduces the administrative burden associated with traditional examination processes, allowing educational institutions to save time and resources while enhancing the overall experience for both educators and students.
					</p>
					<div className="mt-4">
						<a
							target="_blank"
							rel="noreferrer"
							href="hhttps://github.com/Habte2071"
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
								<RiRadioButtonFill className="pr-1" /> Next.js
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Tailwind
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> JavaScript
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> NextAuth
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> MongoDB
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> JWT
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

export default ExamManagementSystem;