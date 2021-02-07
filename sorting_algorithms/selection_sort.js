// for each i iteration loops through the rest of the arr to check if the i is the lowest val 
// if not it performs a swap
function selecetionSort (arr) {
    
    for (var i = 0; i<arr.length; i++) {
        var lowest = i;
        for (var j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]]; //swap
    }
    }
    return arr;
}