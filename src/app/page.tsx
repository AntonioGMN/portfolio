"use client";

import React, { useRef, useEffect, useState } from "react";
import Introduction from "@/components/introduction";
import Skills from "@/components/skills";
import Projets from "@/components/projets";
import About from "@/components/about";

export default function Home() {
	const introductionRef = useRef<HTMLDivElement | null>(null);
	const skillsRef = useRef<HTMLDivElement | null>(null);
	const projetsRef = useRef<HTMLDivElement | null>(null);
	const aboutRef = useRef<HTMLDivElement | null>(null);
	const [onFocus, setOnFocus] = useState(0);

	useEffect(() => {
		// const handleScroll = (event: any) => {
		// 	//const deltaY = event.deltaY;
		// 	//console.log(deltaY);
		const refs = [introductionRef, skillsRef, projetsRef, aboutRef];

		// 	if (deltaY > 0) {
		// 		// Rolar para baixo
		// 		console.log("scroll para baixo");
		// 		console.log(onFocus);
		// 		if (onFocus < 3) setOnFocus(onFocus + 1);
		// 	} else {
		// 		// Rolar para cima
		// 		console.log("scroll para cima");
		// 		if (onFocus > 0) setOnFocus(onFocus - 1);
		// 	}

		// 	console.log("newIndex ", onFocus);

		// 	// Foca no próximo elemento

		// 	if (refs[onFocus].current !== null) {
		// 		refs[onFocus].current.scrollIntoView({
		// 			behavior: "smooth",
		// 		});
		// 	}

		// 	console.log("-------------------------------");
		// };

		//window.addEventListener("wheel", handleScroll);

		const handleKeyDown = (event: React.KeyboardEvent) => {
			if (event.key === "ArrowDown" && onFocus < 3) setOnFocus(onFocus + 1);
			if (event.key === "ArrowUp" && onFocus > 0) setOnFocus(onFocus - 1);

			refs[onFocus]?.current?.scrollIntoView({
				behavior: "smooth",
			});
		};

		window.addEventListener("keydown", (event) =>
			handleKeyDown(event as unknown as React.KeyboardEvent)
		);

		return () => {
			window.removeEventListener("keydown", (event) =>
				handleKeyDown(event as unknown as React.KeyboardEvent)
			);
		};
	});

	const scrollToRef = (ref: any) => {
		ref.current.scrollIntoView({
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
						scrollToRef(introductionRef);
						setOnFocus(0);
					}}
				>
					Introduction
				</button>
				<button
					className="text-white"
					onClick={() => {
						scrollToRef(skillsRef);
						setOnFocus(1);
					}}
				>
					Skills
				</button>
				<button
					className="text-white"
					onClick={() => {
						scrollToRef(projetsRef);
						setOnFocus(2);
					}}
				>
					Projets
				</button>
				<button
					className="text-white"
					onClick={() => {
						scrollToRef(aboutRef);
						setOnFocus(3);
					}}
				>
					About
				</button>
			</div>

			<div ref={introductionRef} className="min-h-screen" tabIndex={0}>
				<p>adsfa</p>
				<p>adsfa</p>
				<p>adsfa</p>
				<p>adsfa</p>
				<p>adsfa</p>
				<p>adsfa</p>
				<p>adsfa</p>
			</div>
			<div ref={skillsRef} tabIndex={1}>
				<p>adsfa</p>
				<p>adsfa</p>
				<p>adsfa</p>
				<p>adsfa</p>
				<p>adsfa</p>
				<p>adsfa</p>
				<p>adsfa</p>
			</div>
			<div ref={projetsRef} tabIndex={2}></div>
			<div ref={aboutRef} tabIndex={3}></div>
		</main>
	);
}
