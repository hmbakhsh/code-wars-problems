// codewars.com -> task: ones and zeroes -> 7kyu
// description: Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// my solution
function binToNum(arr) {
	return arr
		.reverse()
		.map((element, index) => {
			return element * 2 ** index;
		})
		.reduce((acc, cur) => {
			return acc + cur;
		});
}

// console.log(binToNum([1, 1, 1, 1]));

// top solution
function binToNumber(arr) {
	return arr.reverse().reduce((acc, cur, i) => cur * 2 ** i + acc);
}

// console.log(binToNumber([1, 1, 1, 1]));

// solving using parseInt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
function parseBin(arr) {
	return parseInt(arr.join(""), 2);
}

console.log(parseBin([1, 1, 1, 1]));
