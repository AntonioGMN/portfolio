import RefProps from "@/interfaces/refInterface";

export default function About({ innerRef }: RefProps) {
	return (
		<section
			ref={innerRef}
			className="bg-orange-500 flex min-h-screen w-full flex-col items-center justify-between"
		>
			About
		</section>
	);
}
