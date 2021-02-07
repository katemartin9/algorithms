// Time Complexity O(n log n), Space Complexity O(n)
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let midPoint = Math.floor(arr.length/2);
    let leftArr = mergeSort(arr.slice(0, midPoint))
    let rightArr = mergeSort(arr.slice(midPoint))

    return merge(leftArr, rightArr)
}

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;

}

console.log(mergeSort([10, 24, 76, 73]))