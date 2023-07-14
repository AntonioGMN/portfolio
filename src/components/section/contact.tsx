import { FiMail, FiLink } from "react-icons/fi";
import { MdSmartphone } from "react-icons/md";

export default function ContactMe() {
	return (
		<footer className="bg-emerald-400 w-full h-36 flex flex-col text-white font-medium px-16">
			<h1 className="text-4xl text-center">Entre em contato</h1>
			<div className="w-full flex justify-around">
				<div className="flex">
					<MdSmartphone className="w-8 h-9 mr-2" />
					<div className="flex flex-col ">
						<p>Telefone: </p> <p>(84) 98845-6636</p>
					</div>
				</div>
				<div className="flex">
					<FiMail className="w-8 h-10 mr-2" />
					<div className="flex flex-col ">
						<p className="">E-mail:</p> <p>antonio.garciamn@gmail.com</p>
					</div>
				</div>
				<div className="flex">
					<FiLink className="w-8 h-10 mr-2" />
					<div className="flex flex-col ">
						<p>Linkedin</p>

						<a
							href={"https://www.linkedin.com/in/ant%C3%B4nio-garcia/"}
							target="_blank"
						>
							linkedin.com/antonio-garcia
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
