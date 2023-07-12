"use client";

import { useRef, useEffect, useState, MutableRefObject } from "react";
import Introduction from "@/components/section/introduction";
import Skills from "@/components/section/skills";
import Projets from "@/components/section/projets";
import About from "@/components/section/about";

export default function Home() {
	const [onFocus, setOnFocus] = useState(0);
	const introductionRef = useRef<HTMLDivElement | null>(null);
	const skillsRef = useRef<HTMLDivElement | null>(null);
	const projetsRef = useRef<HTMLDivElement | null>(null);
	const aboutRef = useRef<HTMLDivElement | null>(null);
	const refs = [introductionRef, skillsRef, projetsRef, aboutRef];

	const handleKeyEvent = (event: KeyboardEvent) => {
		let index = onFocus;

		if (event.key === "ArrowDown" || event.key === "ArrowUp")
			event.preventDefault();

		if (event.key === "ArrowDown" && onFocus < 3) index++;
		if (event.key === "ArrowUp" && onFocus > 0) index--;

		setOnFocus(index);
		scrollToTop(refs[index]);
	};

	const handleScrollEvent = (event: WheelEvent) => {
		let index = onFocus;
		const deltaY = event.deltaY;
		event.preventDefault();

		if (deltaY > 0 && onFocus < 3) index++;
		if (deltaY < 0 && onFocus > 0) index--;

		setOnFocus(index);
		scrollToTop(refs[index]);
	};

	// useEffect(() => {
	// 	window.addEventListener("keydown", handleKeyEvent);
	// 	window.addEventListener("wheel", handleScrollEvent);

	// 	return () => {
	// 		window.removeEventListener("keydown", handleKeyEvent);
	// 		window.removeEventListener("wheel", handleScrollEvent);
	// 	};
	// }, [onFocus]);

	const scrollToTop = (ref: MutableRefObject<HTMLDivElement | null>) => {
		ref.current?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<main className="min-h-screen h-screen ">
			<div className="fixed left-0 top-0 h-screen w-16 flex flex-col items-center justify-center">
				<button
					className="text-white"
					onClick={() => {
						scrollToTop(introductionRef);
						setOnFocus(0);
					}}
				>
					Introduction
				</button>
				<button
					className="text-white"
					onClick={() => {
						scrollToTop(aboutRef);
						setOnFocus(1);
					}}
				>
					About
				</button>
				<button
					className="text-white"
					onClick={() => {
						scrollToTop(skillsRef);
						setOnFocus(2);
					}}
				>
					Skills
				</button>
				<button
					className="text-white"
					onClick={() => {
						scrollToTop(projetsRef);
						setOnFocus(3);
					}}
				>
					Projets
				</button>
			</div>

			<Introduction innerRef={introductionRef} />
			<About innerRef={aboutRef} />
			<Skills innerRef={skillsRef} />
			<Projets innerRef={projetsRef} />
		</main>
	);
}
