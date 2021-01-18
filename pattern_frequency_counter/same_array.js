// given two arrays return true if the first arrays' values are present in the second array
// but squared
// [1,2,3,2] and [9,1,4,4]

// O(n^2)
function sameArray(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // indexOf - what's the index of the value in the array
        if (correctIndex === -1) {  // if it's not in the array
            return false;
        }
        arr2.splice(correctIndex, 1)  // removes that index from the array
    }
    return true
}

// O(n)
function sameArrayLoops(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    // count number of time a value occurs in each array
    let frequencyCounter1 = {} 
    let frequencyCounter2 = {}
    for (let val of arr1) { // nice way to loop over an array
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) { 
        // checks if a key in the first object exists in the second object but squared
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // checks if the frequency number is the same
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

console.log(sameArray([1,2,3,2],[9,1,4,4]))
console.log(sameArrayLoops([1,2,3,2],[9,1,4,4]))