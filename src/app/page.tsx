"use client";

import React, { useRef } from "react";
import Introduction from "@/components/introduction";
import Skills from "@/components/skills";
import Projets from "@/components/projets";
import About from "@/components/about";

export default function Home() {
	const introductionRef = useRef(null);
	const skillsRef = useRef(null);
	const projetsRef = useRef(null);
	const aboutRef = useRef(null);

	const scrollToRef = (ref: any) => {
		ref.current.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<main className="bg-emerald-400 flex min-h-screen flex-col items-center justify-between px-5">
			<div className="fixed left-0 top-0 h-screen bg-gray-800 w-16 flex flex-col items-center justify-center">
				<button className="text-white" onClick={() => scrollToRef(introductionRef)}>
					Introduction
				</button>
				<button className="text-white" onClick={() => scrollToRef(skillsRef)}>
					Skills
				</button>
				<button className="text-white" onClick={() => scrollToRef(projetsRef)}>
					Projets
				</button>
				<button className="text-white" onClick={() => scrollToRef(aboutRef)}>
					About
				</button>
			</div>

			<Introduction innerRef={introductionRef} />
			<Skills innerRef={skillsRef} />
			<Projets innerRef={projetsRef} />
			<About innerRef={aboutRef} />
		</main>
	);
}
