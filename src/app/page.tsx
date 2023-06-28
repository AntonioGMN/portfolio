"use client";

import { useRef, useEffect, useState, MutableRefObject } from "react";
import Introduction from "@/components/introduction";
import Skills from "@/components/skills";
import Projets from "@/components/projets";
import About from "@/components/about";

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

	useEffect(() => {
		window.addEventListener("keydown", handleKeyEvent);
		window.addEventListener("wheel", handleScrollEvent);

		return () => {
			window.removeEventListener("keydown", handleKeyEvent);
			window.removeEventListener("wheel", handleScrollEvent);
		};
	}, [onFocus]);

	const scrollToTop = (ref: MutableRefObject<HTMLDivElement | null>) => {
		ref.current?.scrollIntoView({
			behavior: "smooth",
		});
	};

	console.log("onFocus", onFocus);

	return (
		<main className="bg-emerald-400 flex min-h-screen flex-col items-center justify-between px-5">
			<div className="fixed left-0 top-0 h-screen bg-gray-800 w-16 flex flex-col items-center justify-center">
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
						scrollToTop(skillsRef);
						setOnFocus(1);
					}}
				>
					Skills
				</button>
				<button
					className="text-white"
					onClick={() => {
						scrollToTop(projetsRef);
						setOnFocus(2);
					}}
				>
					Projets
				</button>
				<button
					className="text-white"
					onClick={() => {
						scrollToTop(aboutRef);
						setOnFocus(3);
					}}
				>
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
