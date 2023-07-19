import RefProps from "@/interfaces/refInterface";
import profileImage from "../../../public/foto.jpeg";
import Image from "next/image";
import SectionTitle from "../h1/SectionTitle";

export default function About({ innerRef }: RefProps) {
	return (
		<section
			ref={innerRef}
			className="px-16 flex flex-col  w-full   text-emerald-400"
		>
			<SectionTitle>Sobre Mim</SectionTitle>
			<div className="flex ">
				<Image src={profileImage} className="h-80 w-72" alt="erro" />
				<div>
					<div>
						<p className="font-semibold">
							Durante minha graduação em Ciências e Tecnologia, tive meu primeiro
							contato prático com a programação ao desenvolver um jogo utilizando
							javascript que vendo hoje é foi bem simples, mas a sensação de satisfação
							por saber porque cada coisa estava funcinando e ao concluí-lo foi imensa.
						</p>
						<p className="font-semibold">
							Esse projeto despertou em mim uma paixão pela programação e me fez
							perceber que era isso que eu queria fazer como carreira. Desde então,
							tenho me dedicado a aprimorar minhas habilidades e conhecimentos.
						</p>
					</div>
					<div className="flex gap-3 mt-4">
						<a href={"/cv.pdf"} download="curriculo-Antonio-Garcia" target="_blank">
							<button className="w-48 h-12 p-2 bg-emerald-400 text-white font-medium">
								Downloud Curriculo
							</button>
						</a>
						<button className="h-12 w-48 p-2 bg-emerald-400 text-white font-medium">
							Entre em contato
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
