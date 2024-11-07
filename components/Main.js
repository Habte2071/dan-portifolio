import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
	const variants = {
		hidden: {
			scale: 0.8,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.4,
			},
		},
	};

	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<motion.div initial="hidden" animate="visible" variants={variants}>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Let&apos;s Build Something Together
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I&apos;m <span className="text-[#1E90FF]">Daniel</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						I’m focused on building responsive front-end web applications while
						learning back-end technologies.
					</p>
					<div className="flex justify-between items-center max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/daniel-elias-3137312b8"
							target="_blank"
							rel="noreferrer"
						>
							<motion.div
								className="bg-blue-600 text-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:rotate-12"
								whileHover={{ scale: 1.1, rotate: 12 }}
							>
								<FaLinkedinIn />
							</motion.div>
						</a>
						<a
							href="https://github.com/Habte2071"
							target="_blank"
							rel="noreferrer"
						>
							<motion.div
								className="bg-gray-800 text-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:rotate-12"
								whileHover={{ scale: 1.1, rotate: 12 }}
							>
								<FaGithub />
							</motion.div>
						</a>
						<a href="mailto:danieleliaswy@gmail.com">
							<motion.div
								className="bg-red-500 text-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:rotate-12"
								whileHover={{ scale: 1.1, rotate: 12 }}
							>
								<AiOutlineMail />
							</motion.div>
						</a>
						<a target="_blank" href="/download.png">
							<motion.div
								className="bg-green-500 text-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:rotate-12"
								whileHover={{ scale: 1.1, rotate: 12 }}
							>
								<BsPersonLinesFill />
							</motion.div>
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Main;