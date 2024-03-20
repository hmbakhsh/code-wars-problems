// codewars.com -> task: beginner series #3 sum of numbers -> 7kyu
// description: Given two integers a and b, which can be positive or negative, find the sum of
// all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// my solution
function getSum(a, b) {
	if (a === b) {
		return a;
	} else {
		let lowerNum = a < b ? a : b;
		let output = 0;
		for (let i = 1; i < Math.abs(a - b); i++) {
			output += lowerNum + i;
		}
		return a + b + output;
	}
}

console.log(getSum(5, -1));

// top solution
const GetSum = (a, b) => {
	let min = Math.min(a, b),
		max = Math.max(a, b);
	return ((max - min + 1) * (min + max)) / 2;
};
