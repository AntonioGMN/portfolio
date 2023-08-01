import RefProps from "@/interfaces/refInterface";
import { PropsWithChildren } from "react";
import SectionTitle from "../texts/SectionTitle";
import Container from "../containers/conteiner";

export default function Skills({ innerRef }: RefProps) {
	return (
		<Container>
			<SectionTitle>Skills</SectionTitle>
			<div className="w-full h-full flex flex-col md:grid md:justify-items-center md:grid-cols-4 gap-4">
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
		</Container>
	);
}

function Article({ children }: PropsWithChildren) {
	return (
		<article className="w-full h-28 md:w-52 md:h-52 bg-emerald-400 flex justify-center items-center text-center text-lg md:text-xl rounded-2xl md:rounded-full shadow-2xl">
			{children}
		</article>
	);
}
