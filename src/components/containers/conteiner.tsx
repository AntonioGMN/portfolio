import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
	return (
		<section className="w-full px-2 flex flex-col md:px-16">{children}</section>
	);
}
