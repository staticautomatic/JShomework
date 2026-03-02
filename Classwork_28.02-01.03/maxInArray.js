function maxInArray(arr) {
    var max = Number.NEGATIVE_INFINITY;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

var arr = [28, 3, "38", 0];
console.log("The max value is", maxInArray(arr));