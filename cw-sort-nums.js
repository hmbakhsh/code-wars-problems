// codewars.com -> task: sort numbers -> 7kyu
// description: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

// my solution

function bigSmall(a, b) {
	if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	} else {
		return 0;
	}
}

function solution(nums) {
	return nums.sort(bigSmall);
}

console.log(solution([1, 2, 3, 10, 5]));

// top solution
function sln(nums) {
	return nums ? nums.sort((a, b) => a - b) : []; // must include the conditional to check if nums is truthy
}

console.log(sln([1, 2, 3, 10, 5]));
