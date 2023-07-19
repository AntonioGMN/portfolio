import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Projects from "@/interfaces/projects";
import Image from "next/image";

interface CarouselProps {
	obj: Projects;
}

export default function ProjectsCarousel({ obj }: CarouselProps) {
	console.log(obj);
	return (
		<Carousel
			showArrows={true}
			showThumbs={false}
			showIndicators={true}
			infiniteLoop={true}
			dynamicHeight={false}
			autoPlay={true}
		>
			{obj.imgs.map((imgUrl) => (
				<Image key={"asdf"} src={imgUrl} alt="slides" className="h-full w-full" />
			))}
		</Carousel>
	);
}
