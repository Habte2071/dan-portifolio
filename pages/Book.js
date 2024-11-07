import React from "react";
import Image from "next/image";
import bookStoreImage from "../public/assets/projects/crypto.jpg"; // Use your actual image path
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const BookStoreManagement = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={bookStoreImage}
					alt="Book Store Management"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white z-10 p-2">
					<h2 className="py-2">Book Store Management System</h2>
					<p>React.js | Tailwind CSS | Next.js</p>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="text-lg font-semibold">Project Overview</p>
					<p className="mt-2">
						The Book Store Management System is a comprehensive application designed to streamline the operations of a retail bookstore. This system facilitates efficient management of inventory, sales, customer interactions, and reporting, thereby enhancing the overall productivity and user experience within the bookstore environment.
					</p>
					<h3 className="mt-4 font-semibold">Key Features:</h3>
					<ul className="list-disc list-inside mt-2">
						<li>User Authentication: Secure login for administrators and staff.</li>
						<li>Inventory Management: Real-time tracking of book stock levels.</li>
						<li>Sales Management: A robust checkout system for quick sales processing.</li>
						<li>Customer Management: Comprehensive customer profiles for personalized marketing.</li>
						<li>Reporting and Analytics: Detailed reports for strategic decision-making.</li>
						<li>Responsive Design: A user-friendly interface that adapts to various devices.</li>
					</ul>
					<h3 className="mt-4 font-semibold">Technology Stack:</h3>
					<ul className="list-disc list-inside mt-2">
						<li>Frontend: React.js for a dynamic user interface.</li>
						<li>Backend: Node.js with Express.js for a robust server-side application.</li>
						<li>Database: MongoDB for flexible and scalable data management.</li>
						<li>Authentication: JSON Web Tokens (JWT) for secure authentication.</li>
						<li>Deployment: Hosted on Heroku for reliable performance.</li>
					</ul>
					<h3 className="mt-4 font-semibold">Challenges and Solutions:</h3>
					<p>
						During development, I encountered challenges such as managing real-time inventory updates. To address these issues, I implemented state management using Redux.
					</p>
					<div className="mt-4">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Habte2071"
						>
							<button className="px-8 py-2 mt-4 mr-8 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200">Code</button>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Habte2071"
						>
							<button className="px-8 py-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-500 transition duration-200">Demo</button>
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
								Tailwind CSS
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Node.js
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Express.js
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								MongoDB
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								JWT
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<div className="mt-4">
						<button className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition duration-200">Back</button>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default BookStoreManagement;