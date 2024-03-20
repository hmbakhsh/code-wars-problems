// codewars.com -> task: finding the next perfect square -> 7kyu
// description: https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

// my solution
function findNextSquare(sq) {
	let num = Math.sqrt(sq) + 1;
	if (sq === null) {
		return -1;
	} else if (num === Math.trunc(num)) {
		return Math.pow(num, 2);
	} else {
		return -1;
	}
}

// alt solution
function findNextSquare(sq) {
	let num = Math.sqrt(sq);
	return num === Math.trunc(num) ? Math.pow(num + 1, 2) : -1;
}

// top solution
function fNs(sq) {
	return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

// Math.sqrt(sq) % 1 (integers leave no remainder when they're divided by 1
// non-integers will return a number which is truthy, integers will return 0 which is falsy
// you can then write a conditional in accordance with these outcomes enabling you to handle
// integers and non-integers differently
