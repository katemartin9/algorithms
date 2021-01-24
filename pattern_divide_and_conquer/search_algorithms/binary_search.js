// O(log n) or O(1)
function binarySearch(arr, val){
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end)/2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1; 
        }    else start = middle + 1;
        middle = Math.floor((start + end)/2);
    }
    return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 100))