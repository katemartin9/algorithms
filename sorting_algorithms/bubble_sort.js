// O(n^2), if nearly sorten then O(n)
function bubbleSort(arr){
    for (var i = arr.length; i > 0;i--) {
        for (var j = 0; j < i-1; j++) { // i-1 helps to avoid comparing the end as it's already sorted
            if (arr[j] > arr[j+1]) { // looping from left to right
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // swap
            }
        } 
    }
return arr;
}

function bubbleSortOpt(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0;i--) {
        noSwaps = true
        for (var j = 0; j < i-1; j++) { // i-1 helps to avoid comparing the end as it's already sorted
            if (arr[j] > arr[j+1]) { // looping from left to right
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // swap
                noSwaps = false
            }
        }
        if(noSwaps) break; // stops when there are no swaps
    }
return arr;
}
console.log(bubbleSortOpt([8, 1, 2, 3, 4, 5, 6, 7]))
