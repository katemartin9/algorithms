// O(n)
function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    let i = 0
    for (let j=1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            // when the jth num doesn't equel to the ith num increment i
            i++;
            arr[i] = arr[j]  // assign ith num to the jth number
        }
      
    }
    return i+1
}

// start with i = 0 and j = 1 moving j until come across the second unique number
// then move i by 1 and set to whatever j is equal to
console.log(countUniqueValues([1,1,1,2,3,3,4,5,6,6,7]))