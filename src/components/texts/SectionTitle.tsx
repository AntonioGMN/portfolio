import { PropsWithChildren } from "react";

export default function SectionTitle({ children }: PropsWithChildren) {
	return (
		<h1 className="font-bold  pb-2 border-b-4 border-emerald-400 text-5xl text-emerald-400 mb-8">
			{children}
		</h1>
	);
}
