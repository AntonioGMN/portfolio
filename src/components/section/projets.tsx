import RefProps from "@/interfaces/refInterface";
import SectionTitle from "../h1/SectionTitle";
import profileImage from "../../../public/foto.jpeg";
import Image from "next/image";
import ProjectsCarousel from "../carosel";
import Tegrafood from "../../../public/projects/tegrafood";
import { PropsWithChildren } from "react";
import Linkr from "../../../public/projects/linkr";
import Shorty from "../../../public/projects/sortly";

export default function Projets({ innerRef }: RefProps) {
	return (
		<section
			ref={innerRef}
			className="w-full px-16 flex flex-col justify-between mb-12"
		>
			<SectionTitle>Meus Projetos</SectionTitle>
			<section className="w-full grid grid-cols-2 grid-rows-2 gap-3">
				<Article>
					<ProjectName>Tegrafood</ProjectName>
					<ProjectsCarousel obj={Tegrafood} />
				</Article>
				<Article>
					<ProjectName>Linkr</ProjectName>
					<ProjectsCarousel obj={Linkr} />
				</Article>
				<Article>
					<ProjectName>Shorty</ProjectName>
					<ProjectsCarousel obj={Shorty} />
				</Article>
				<Article>
					<ProjectName>Nome do artigo</ProjectName>
					<ProjectsCarousel obj={Tegrafood} />
				</Article>
			</section>
		</section>
	);
}

function Article({ children }: PropsWithChildren) {
	return <article className="flex flex-col shadow-2xl">{children}</article>;
}

function ProjectName({ children }: PropsWithChildren) {
	return (
		<p className=" bottom-4 left-6 text-xl text-emerald-400 font-bold">
			{children}
		</p>
	);
}
