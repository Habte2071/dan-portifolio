import React from "react";
import Image from "next/image";
import Link from "next/link";
import contactImg from "../public/assets/contact.svg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsTelegram, BsPersonLinesFill, BsWhatsapp, BsFacebook } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
	return (
		<div id="contact" className="w-full lg:h-screen bg-gradient-to-br from-gray-100 to-gray-300">
			<div className="max-w-[1240px] m-auto px-2 py-16">
				<p className="text-xl uppercase tracking-widest text-[#1E90FF] text-center">Contact</p>
				<h2 className="py-4 text-center text-3xl font-bold">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* Left Section */}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 bg-white transform transition-transform duration-300 hover:scale-105">
						<div className="lg:p-4 h-full">
							<Image
								className="rounded-xl hover:scale-105 ease-in duration-300"
								src={contactImg}
								alt="Contact"
							/>
							<div>
								<h2 className="py-2 text-xl font-semibold">Daniel Elias</h2>
								<p className="text-gray-600">Front End Developer</p>
								<p className="py-4 text-gray-500">
									Feel free to reach out if you’re looking for a developer, have a question, or just want to connect.
								</p>
							</div>
							<div>
								<p className="uppercase pt-8 font-semibold">Connect With Me</p>
								<div className="flex items-center justify-between py-4">
									{[
										{ href: "https://www.linkedin.com/in/daniel-elias-3137312b8", icon: <FaLinkedinIn /> },
										{ href: "https://github.com/Habte2071", icon: <FaGithub /> },
										{ href: "https://t.me/Daniconn/", icon: <BsTelegram /> },
										{ href: "https://whatsapp.com/dl/code=keWxKBFb1z", icon: <BsWhatsapp /> },
										{ href: "https://www.facebook.com/profile.php?id=100075251709436", icon: <BsFacebook /> },
										{ href: "/download.png", icon: <BsPersonLinesFill /> },
									].map(({ href, icon }, index) => (
										<a key={index} href={href} target="_blank" rel="noreferrer">
											<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-br from-[#FF5722] to-[#FF9800] transform transition-transform duration-300 hover:scale-125">
												{icon}
											</div>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Right Section */}
					<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 bg-white">
						<div className="p-4">
							<form
								action="https://getform.io/f/6c07bc88-5f8a-4485-b9c4-c32ec6721b84"
								method="POST"
								encType="multipart/form-data"
							>
								<div className="grid grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">Name</label>
										<input
											type="text"
required
											className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition duration-200"
											name="name"
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">Phone Number</label>
										<input
											type="text"
required
											className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition duration-200"
											name="phone"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Email</label>
									<input
										type="email"
required
										className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition duration-200"
										name="email"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Subject</label>
									<input
										type="text"
required
										className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition duration-200"
										name="subject"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Message</label>
									<textarea
										className="border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition duration-200"
										rows="10"
required
										name="message"
									></textarea>
								</div>
								<button
									type="submit"
									className="w-full p-4 text-white mt-4 bg-gradient-to-r from-[#FF4500] to-[#FF6347] rounded-md hover:bg-gradient-to-l hover:scale-105 transition-all duration-300"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer bg-gradient-to-br from-[#1E90FF] to-[#00BFFF] hover:scale-110 ease-in duration-300">
							<HiOutlineChevronDoubleUp className="text-white" size={30} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
