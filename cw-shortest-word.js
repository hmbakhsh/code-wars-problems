// codewars.com -> task: shortest word -> 7kyu
////////////////////////////////////////////////////////////////////////////////////////
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


// my solution
let testStr = 'bitcoin take over the world maybe who knows perhaps';

function sortS(a,b) {
    if (a.length > b.length) {
        return 1
    } else if (b.length > a.length) {
        return -1
    } else {
        return 0
    }
}

function findShort(s) {
    s = s.split(' ').sort(sortS);
    return s[0].length
}

// console.log(findShort(testStr));

// top solution
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

// spread operator in JS
let arr = [1,6,4,3,5];
console.log(Math.max(...arr));