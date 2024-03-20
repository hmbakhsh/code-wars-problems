// codewars.com -> task: mumbling -> 7kyu
// description:

// my solution
function accum(s) {
	return s
		.split("")
		.map((element, index) => {
			let c = "";
			for (let i = 0; i < index + 1; i++) {
				i === 0 ? (c += element.toUpperCase()) : (c += element.toLowerCase());
			}
			return c;
		})
		.join("-");
}

// top solution
function accums(s) {
	return c
		.split("")
		.map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
		.join("-");
}
