// loops through an array and for every value i it checks all previous values j
// based on the values of i and j it inserts the current value i
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        console.log(i)
        var currVal = arr[i];
        console.log(currVal)
        for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
            console.log(j)
            arr[j+1] = arr[j]
            console.log(arr)
        }
        console.log(`j+1:${j+1}, ${arr[j+1]}`)
        arr[j+1] = currVal;
        console.log(`Out of the j loop ${arr}`)
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4])



