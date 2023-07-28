import RefProps from "@/interfaces/refInterface";
import { PropsWithChildren } from "react";
import SectionTitle from "../texts/SectionTitle";

export default function Skills({ innerRef }: RefProps) {
	return (
		<section ref={innerRef} className="w-full flex flex-col px-16">
			<SectionTitle>Minhas Skills</SectionTitle>
			<div className="w-full h-full grid justify-items-center grid-cols-4 gap-4">
				<Article>
					<ul>
						<li>Node</li>
						<li>TypeScript</li>
						<li>Nestjs</li>
						<li>Jest</li>
					</ul>
				</Article>
				<Article>
					<ul>
						<li>React</li>
						<li>NextJS</li>
						<li>Tailwind</li>
						<li>Cypress</li>
					</ul>
				</Article>
				<Article>
					<ul>
						<li>PostgreSQL</li>
						<li>MySQL</li>
						<li>MongoDB</li>
					</ul>
				</Article>
				<Article>
					<ul>
						<li>Scrull</li>
						<li>Gestão de Tempo</li>
						<li>Git Flow</li>
					</ul>
				</Article>
			</div>
		</section>
	);
}

function Article({ children }: PropsWithChildren) {
	return (
		<article className="w-52 h-52 bg-emerald-400 flex justify-center items-center text-xl rounded-full shadow-2xl">
			{children}
		</article>
	);
}
