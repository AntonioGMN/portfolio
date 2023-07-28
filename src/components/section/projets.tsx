import RefProps from "@/interfaces/refInterface";
import SectionTitle from "../texts/SectionTitle";
import ProjectsCarousel from "../carosel";
import Tegrafood from "../../../public/projects/tegrafood";
import { PropsWithChildren } from "react";
import Linkr from "../../../public/projects/linkr";
import Shorty from "../../../public/projects/sortly";
import Projects from "@/interfaces/projects";
import Link from "next/link";

export default function Projets({ innerRef }: RefProps) {
	return (
		<section
			ref={innerRef}
			className="w-full px-16 flex flex-col justify-between mb-12"
		>
			<SectionTitle>Meus Projetos</SectionTitle>
			<section className="flex flex-col gap-4">
				<Article>
					<ProjectsCarousel obj={Tegrafood} />
					<ProjetctDescribe project={Tegrafood} />
				</Article>
				<Article>
					<ProjectsCarousel obj={Linkr} />
					<ProjetctDescribe project={Linkr} />
				</Article>
				<Article>
					<ProjectsCarousel obj={Shorty} />
					<ProjetctDescribe project={Shorty} />
				</Article>
			</section>
		</section>
	);
}

function Article({ children }: PropsWithChildren) {
	return (
		<article className="w-full flex shadow-2xl  p-4 rounded">{children}</article>
	);
}

function ProjetctDescribe({ project }: { project: Projects }) {
	return (
		<div className="flex flex-col flex-1 ml-5 text-black relative">
			<ProjectName>{project.name}</ProjectName>
			{project.describe.map((text, i) => (
				<p key={i}>{text}</p>
			))}
			<p className="text-lg font-medium mt-2">Principais Tecnologias: </p>
			<p>{project.technologies.map((tec) => ` ${tec} `)}</p>
			<Link
				href={project.gitHubUrl}
				target="_blank"
				className="absolute bottom-0 right-0"
			>
				saiba mais
			</Link>
		</div>
	);
}

function ProjectName({ children }: PropsWithChildren) {
	return (
		<p className="bottom-4 left-6 text-xl text-black font-bold mb-2">
			{children}
		</p>
	);
}
