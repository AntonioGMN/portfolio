import RefProps from "@/interfaces/refInterface";

export default function Introduction({ innerRef }: RefProps) {
	return (
		<section
			ref={innerRef}
			className="bg-rose-600 flex min-h-screen w-full flex-col items-center justify-between"
		>
			Introduce
		</section>
	);
}
