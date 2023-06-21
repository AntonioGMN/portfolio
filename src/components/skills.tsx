import RefProps from "@/interfaces/refInterface";

export default function Skills({ innerRef }: RefProps) {
	return (
		<section
			ref={innerRef}
			className="bg-blue-500 flex min-h-screen w-full flex-col items-center justify-between"
		>
			Skills
		</section>
	);
}
