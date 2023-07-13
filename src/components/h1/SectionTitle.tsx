import { PropsWithChildren } from "react";

export default function SectionTitle({ children }: PropsWithChildren) {
	return (
		<h1 className="font-bold border-b-4 pb-2 border-emerald-400 text-5xl text-emerald-400 mb-16">
			{children}
		</h1>
	);
}
