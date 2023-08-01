"use client";

import Introduction from "@/components/section/introduction";
import Skills from "@/components/section/skills";
import Projets from "@/components/section/projets";
import About from "@/components/section/about";
import ContactMe from "@/components/section/contact";

export default function Home() {
	return (
		<main className="min-h-screen h-screen ">
			<Introduction />
			<About />
			<Skills />
			<Projets />
			<ContactMe />
		</main>
	);
}
