import { PropsWithChildren } from "react";

export default function Introduction() {
	return (
		<section className="flex flex-col justify-evenly bg-introductionBG w-full h-2/5 bg-cover ">
			<LargeText>Bem vindo ao meu WebSite</LargeText>
			<LargeText>
				Me chamo <br /> Antonio Garcia
			</LargeText>
			<LargeText>Sou um desenvolvedor Full Stack</LargeText>
		</section>
	);
}

function LargeText({ children }: PropsWithChildren) {
	return (
		<p className="text-center text-3xl font-medium md:text-4xl">{children}</p>
	);
}
