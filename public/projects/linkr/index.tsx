import Projects from "@/interfaces/projects";
import image1 from "./imgs/1.png";
import image2 from "./imgs/2.png";
import image3 from "./imgs/3.png";
import image4 from "./imgs/4.png";
import image5 from "./imgs/5.png";
import image6 from "./imgs/6.png";

const Linkr: Projects = {
	name: "Linkr",
	imgs: [image1, image2, image3, image4, image5, image6],
	describe: [
		"• Projeto em grupo de uma rede social",
		"• Desenvolvi durante três sprints com um time de outros 3 desenvolvedores permitindo a criação de uma rede social, seguindo metodologias ágeis ( Scrum )",
		"• Implementei o fluxo de autenticação , permitindo que o usuário pudesse logar e se cadastrar na plataforma",
		"• Construir a feature que permite que o usuário seja informado quando há novos posts das pessoas que ele segue",
		"• Implementei a busca por outros usuários",
		"• Tecnologias utilizadas: Node.js, Javascript, React, json web token, styled-components e axios",
	],
	technologies: [
		"NODE.JS",
		"REACT.JS",
		"TYPESCRIPT",
		"AXIOS",
		"STYLED-COMPONENT",
		"MUI-UI",
		"REACT ROUTER",
	],
	gitHubUrl: "https://github.com/AntonioGMN/Linkr_frontend",
};

export default Linkr;
