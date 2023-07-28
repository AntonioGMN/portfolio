import Projects from "@/interfaces/projects";
import image1 from "./imgs/1.png";
import image2 from "./imgs/2.png";
import image3 from "./imgs/3.png";
import image4 from "./imgs/4.png";
import image5 from "./imgs/5.png";
import image6 from "./imgs/6.png";
import image7 from "./imgs/7.png";

const Tegrafood: Projects = {
	name: "Tegrafood",
	imgs: [image1, image2, image3, image4, image5, image6, image7],
	describe: [
		"• Um site para venda de alimentos",
		"• Possui autenticação como usuario padrão ou como administrador",
		"• Layout responsivo",
		"• Quando logado como administrador permite a criação e adição de produtos",
		"• O usuário padrão pode adicionar item ao carrinho para compra",
		"• Possui filtro dos produtos por categoria ou faixa de preço",
	],
	technologies: [
		"NODE",
		"REACT",
		"TYPESCRIPT",
		"STYLED-COMPONENT",
		"MUI-UI",
		"REACT ROUTER",
	],
	gitHubUrl: "https://github.com/AntonioGMN/tegrafood-front",
};

export default Tegrafood;
