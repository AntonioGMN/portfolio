import RefProps from "@/interfaces/refInterface";
import SectionTitle from "../h1/SectionTitle";
import profileImage from "../../../public/foto.jpeg";
import Image from "next/image";

export default function Projets({ innerRef }: RefProps) {
	return (
		<section
			ref={innerRef}
			className="w-full px-16 flex flex-col justify-between mb-12"
		>
			<SectionTitle>Meus Projetos</SectionTitle>
			<section className="w-full display flex ">
				<article className="w-80 flex flex-col  bg-red-500 relative shadow-2xl">
					<Image src={profileImage} className="h-80 w-full" alt="erro" />
					<p className="absolute bottom-4 left-6 text-xl text-emerald-400 font-bold">
						Nome do artigo
					</p>
				</article>
				<article className="w-80 flex flex-col  bg-red-500 relative shadow-2xl">
					<Image src={profileImage} className="h-80 w-full" alt="erro" />
					<p className="absolute bottom-4 left-6 text-xl text-emerald-400 font-bold">
						Nome do artigo
					</p>
				</article>
				<article className="w-80 flex flex-col  bg-red-500 relative shadow-2xl">
					<Image src={profileImage} className="h-80 w-full" alt="erro" />
					<p className="absolute bottom-4 left-6 text-xl text-emerald-400 font-bold">
						Nome do artigo
					</p>
				</article>
			</section>
		</section>
	);
}
