// codewars.com -> task: find the stray number -> 7 kyu
// description: https://www.codewars.com/kata/57f609022f4d534f05000024/javascript

// my solution
function stray(numbers) {
	let arr = numbers.sort((a, b) => {
		return a - b;
	});
	let arrLastIndex = arr.length - 1;
	if (arr[0] < arr[1]) {
		return arr[0];
	} else {
		return arr[arrLastIndex];
	}
}

// console.log(stray([17, 17, 31, 17, 17, 17, 17]));

// alt solution
function strays(nums) {
	let unique = [...new Set(nums)];
	let num1 = nums.filter((element) => element === unique[0]).length;
	let num2 = nums.filter((element) => element === unique[1]).length;
	return num2 > num1 ? unique[0] : unique[1];
}

// top solutions
function topSln(nums) {
	return nums.reduce((a, c) => a ^ c);
}
console.log(topSln([3, 3, 3, 3, 3, 3, 17]));

function stray(numbers) {
	for (var i in numbers) {
		if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
			return numbers[i];
		}
	}
}
