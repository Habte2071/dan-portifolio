import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Daniel | Front-End Developer</title>
				<meta name="description" content="Created by Daniel Elias" />
				<link rel="icon" href="/favi.png" />
			</Head>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
