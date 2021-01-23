
function collectOddValues(nums) {
    let result = [];

    function helperRec(arr){
        if (arr.length === 0) {
            return;
        }
        if (arr[0] % 2 !==0) {
            result.push(arr[0])
        }
        helperRec(arr.slice(1))
    }
    helperRec(nums)
    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
