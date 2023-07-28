import Projects from "@/interfaces/projects";
import image1 from "./imgs/1.png";
import image2 from "./imgs/2.png";
import image3 from "./imgs/3.png";

const Shorty: Projects = {
	name: "Shorty",
	imgs: [image1, image2, image3],
	describe: [
		"• Site onde você pode guardar artigos que achou interresante por meio dos seus link",
		"• Back-end contruido com API seguindo o padão REST",
		"• Possui testes de integração e unitarios",
		"• Autenticação de usuarios feita por meio de JSON-Web-Token",
		"• Consumo de meta-dates de links",
	],
	technologies: ["NODE.JS", "REACT.JS", "JEST", "PRISMA", "STYLED-COMPONENT"],
	gitHubUrl: "https://github.com/AntonioGMN/Shortyl-front",
};

export default Shorty;
