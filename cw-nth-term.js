// codewars.com -> task: sum of the nth term of a series -> 7 kyu
// description:
// Write  a function which returns the n-th term of the following series, which is the sum of the first n terms of
// the sequence (n is the input parameter).

// my solution

function seriesSum(n) {
	let output = 0;
	let counter = 1;
	for (let i = 0; i < n; i++) {
		output += 1 / counter;
		counter += 3;
	}
	return output.toFixed(2);
}

console.log(seriesSum(5));

// top solution
function seriesSum2(n) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += 1 / (1 + i * 3);
	}
	return sum.toFixed(2);
}

console.log(seriesSum2(5));
