// 
function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num); // print the input
    num--; // subtract 1
    countDown(num); // call our function again
}

countDown(10)

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

sumRange(3)
