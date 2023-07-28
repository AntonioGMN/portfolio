import { StaticImageData } from "next/image";

export default interface Projects {
	imgs: StaticImageData[];
	name: string;
	describe: string[];
	technologies: string[];
	gitHubUrl: string;
}
