function pivot(arr, start=0, end=arr.length+1) {
var pivot = arr[start]
var swapIdx = start
for (var i = start + 1; i < arr.length; i++ ) {
    console.log(arr[i])
    if (pivot > arr[i]) {
        swapIdx ++;
        console.log(swapIdx, i)
        [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        console.log(arr)
    }
}
return arr
}

function quickSort(arr) {

}

pivot([5, 2, 1, 8, 4, 7, 6, 3])