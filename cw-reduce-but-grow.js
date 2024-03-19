// codewars.com -> removing elements -> 8kyu
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

let x = [2,2,2,2,2,2,2,2,2,2,2]

function grow(x) {
    return x.reduce((acc, cur) => {
        return acc*cur;
    })
}

console.log(grow(x));