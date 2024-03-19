// codewars.com -> simple multiplication -> 8kyu
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// my solution: 
function simpleMultiplication(num) {
    return num%2===0 ? num*8 : num*9
}

console.log(simpleMultiplication(11))

// top solution:
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}