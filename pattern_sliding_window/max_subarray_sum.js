// naive solution O(n^2)
function maxSubarraySum_(arr, num) {
    if (num > arr.length) {
        return null;
    } 
    var max = -Infinity; // not 0 in case there are negative numbers
    for (let i = 0; i < arr.length - num + 1; i++) { 
        // if index is smaller than num - stop
        temp = 0; // will store our sum
        for (let j = 0; j < num; j++) {
            temp += arr[i+j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// fixed window of size num 
// as it shifts by one we subtract the first number and add the new number
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length) {
        return null;
    }
    // get the sum of the first n digits and save as maxsum
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    // keep sliding the window from index num
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19

