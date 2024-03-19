// codewars.com -> removing elements -> 8kyu 
// Take an array and remove every second element from the array. Always keep the 
// first element and start removing with the next element.

const arr = ['Hello', 'Goodbye', 'Hello Again', 'Goodbye', 'Hey']

function removeEveryOther(arr) {
    newArr = [];
    for (let i = 0; i < arr.length; i+=2) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function removeEveryOther(arr) {
    return arr.filter((element, index) => { return index % 2 === 0 })
}

console.log(removeEveryOther(arr));