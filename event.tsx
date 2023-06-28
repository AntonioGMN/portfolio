const handleScroll = (event: any) => {
	const deltaY = event.deltaY;
	console.log(deltaY);

	if (deltaY > 0) {
		//Rolar para baixo
		console.log("scroll para baixo");
		console.log(onFocus);
		if (onFocus < 3) setOnFocus(onFocus + 1);
	} else {
		//Rolar para cima
		console.log("scroll para cima");
		if (onFocus > 0) setOnFocus(onFocus - 1);
	}

	console.log("newIndex ", onFocus);

	//Foca no próximo elemento

	if (refs[onFocus].current !== null) {
		refs[onFocus].current.scrollIntoView({
			behavior: "smooth",
		});
	}

	console.log("-------------------------------");
};

//window.addEventListener("wheel", handleScroll);
