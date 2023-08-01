import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";
import { FiMail, FiLink } from "react-icons/fi";
import { MdSmartphone } from "react-icons/md";

export default function ContactMe() {
	return (
		<footer className="bg-emerald-400 w-full md:h-36 flex flex-col text-white font-medium ">
			<h1 className="text-xl md:text-4xl text-center">Entre em contato</h1>
			<div className="w-full flex flex-col md:flex-row justify-around gap-2">
				<div className="flex text-base">
					<MdSmartphone className="w-8 h-9 mr-2" />
					<Box>
						<p>Telefone: </p> <p>(84) 98845-6636</p>
					</Box>
				</div>
				<div className="flex text-base">
					<FiMail className="w-8 h-10 mr-2 " />
					<Box>
						<p className="">E-mail:</p> <p>antonio.garciamn@gmail.com</p>
					</Box>
				</div>
				<div className="flex text-base">
					<FiLink className="w-8 h-10 mr-2 " />
					<Box>
						<p>Linkedin:</p>

						<Link
							href={"https://www.linkedin.com/in/ant%C3%B4nio-garcia/"}
							target="_blank"
						>
							linkedin.com/antonio-garcia
						</Link>
					</Box>
				</div>
			</div>
		</footer>
	);
}

interface BoxProps {
	children: ReactNode;
}

function Box({ children }: PropsWithChildren) {
	return <div className="flex md:flex-col gap-2 md:gap-0">{children}</div>;
}
