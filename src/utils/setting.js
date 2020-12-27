async function AutoResponse() {
	if (innerWidth >= 768) {
		document.documentElement.style.fontSize = "50px";
	} else if (process.client) {
		const _ = await import("trample");
		_.AutoResponse();
	}
}

async function ListenAutoResponse() {
	AutoResponse();
	const _ = await import("trample");
	window.addEventListener("resize", _.Throttle(AutoResponse, 500));
}

export {
	AutoResponse,
	ListenAutoResponse
};