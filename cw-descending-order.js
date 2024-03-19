// codewars.com -> task: descending order -> 7kyu
// description: Your task is to make a function that can take any non-negative integer as an argument and return 
// it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


// my solution
function descendingOrder(n) {
    n = n.toString().split('').map((element) => parseInt(element)).sort().reverse().join('');
    return parseInt(n)
}

console.log(descendingOrder(84621));

// top solution

function descOrder(n) {
    return parseInt(n.toString().split('').sort().reverse().join(''))
    // return parseInt(String(n).split('').sort().reverse().join('')) // an alternative way to make n a string
}

console.log(descOrder(84621));
