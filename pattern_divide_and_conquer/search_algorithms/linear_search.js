function LinearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (val === arr[i] ) {
            return i;
        }
    }
    return -1
}

console.log(LinearSearch([1, 2, 3, 4, 5, 6, 7], 6))