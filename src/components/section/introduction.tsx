import RefProps from "@/interfaces/refInterface";
import Image from "next/image";
import profileImage from "../../../public/foto.jpeg";

export default function Introduction({ innerRef }: RefProps) {
	return (
		<section
			ref={innerRef}
			className="bg-gradient-to-r from-emerald-400 to-indigo-700 w-full h-2/5  flex items-center
			"
		>
			<div className="flex flex-col w-full text-center">
				<h1 className="font-medium text-4xl ">Bem vindo ao meu WebSite</h1>
				<h1 className="font-medium text-4xl ">
					Eu me chamo <br /> Antonio Garcia
				</h1>
				<h2 className="font-medium text-3xl my-8 ">
					Sou um desenvolvedor Full Stack
				</h2>
			</div>
			{/* <div className="flex-1 flex justify-center">
				<Image src={profileImage} className="h-60 w-60" alt="erro" />
			</div> */}
		</section>
	);
}
