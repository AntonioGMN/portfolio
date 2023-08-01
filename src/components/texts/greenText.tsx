import { PropsWithChildren } from "react";

export default function GreenText({ children }: PropsWithChildren) {
	return <p className="font-semibold text-emerald-400">{children}</p>;
}
