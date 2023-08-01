import RefProps from "@/interfaces/refInterface";

export default function Introduction({ innerRef }: RefProps) {
	return (
		<section
			ref={innerRef}
			className=" flex items-center bg-introductionBG w-full h-2/5 bg-cover"
		>
			<div className="flex flex-col w-full text-center">
				<h1 className="font-medium text-4xl ">Bem vindo ao meu WebSite</h1>
				<h1 className="font-medium text-5xl ">
					Me chamo <br /> Antonio Garcia
				</h1>
				<h2 className="font-medium text-4xl my-8 ">
					Sou um desenvolvedor Full Stack
				</h2>
			</div>
		</section>
	);
}
