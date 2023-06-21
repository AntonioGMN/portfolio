import RefProps from "@/interfaces/refInterface";

export default function Projets({ innerRef }: RefProps) {
	return (
		<section
			ref={innerRef}
			className="bg-purple-600 flex min-h-screen w-full flex-col items-center justify-between"
		>
			About
		</section>
	);
}
