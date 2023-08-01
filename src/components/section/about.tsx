import profilePhoto from "../../../public/profilePhoto.jpeg";
import Image from "next/image";
import Container from "../containers/conteiner";
import SectionTitle from "../texts/SectionTitle";
import GreenText from "../texts/greenText";
import { PropsWithChildren } from "react";

export default function About() {
	return (
		<Container>
			<SectionTitle>Sobre Mim</SectionTitle>
			<div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
				<Image src={profilePhoto} className="h-80 w-72" alt="erro" />
				<div>
					<div className="flex flex-col gap-2">
						<GreenText>
							Durante minha graduação em Ciências e Tecnologia, tive meu primeiro
							contato prático com a programação ao desenvolver um jogo utilizando
							javascript que vendo hoje é foi bem simples, mas a sensação de satisfação
							por saber porque cada coisa estava funcinando e ao concluí-lo foi imensa.
						</GreenText>
						<GreenText>
							Esse projeto despertou em mim uma paixão pela programação e me fez
							perceber que era isso que eu queria fazer como carreira. Desde então,
							tenho me dedicado a aprimorar minhas habilidades e conhecimentos.
						</GreenText>
					</div>
					<div className="w-full flex flex-col justify-evenly gap-3 mt-4 md:flex-row md:justify-start">
						<a href={"/cv.pdf"} download="curriculo-Antonio-Garcia" target="_blank">
							<Button>Downloud Curriculo</Button>
						</a>
						<a href="https://wa.me/5584988456636" target="_blank">
							<Button>Entre em contato</Button>
						</a>
					</div>
				</div>
			</div>
		</Container>
	);
}

function Button({ children }: PropsWithChildren) {
	return (
		<button className="w-full md:w-48 h-12 p-2 rounded-3xl bg-emerald-400 text-white font-medium">
			{children}
		</button>
	);
}
