// algo 1//
function print1To255(){
    var holdNum = [];
    for (var i = 1; i < 256; i++){
        console.log(i);
        holdNum.push(i);
    }
    return holdNum;
}
console.log(print1To255());
//algo 2//
function printOdds1To255(){
    var holdNum = []
    for (var i = 1; i < 256; i++){
        if ( i % 2 != 0){
            console.log(i);
            holdNum.push(i);
        }
    }
    return holdNum;
}
console.log(printOdds1To255());
//algo3//
function printIntsAndSum0To255(){
    var sum = 0;
    for (var i = 0; i < 256; i++){
        console.log( "current integer " + i);
        sum = sum + i;
        console.log("The sum is at " + sum);
    }
    return "The final sum is " + sum;
}
console.log(printIntsAndSum0To255());

//algo 4//

function printArrayVals(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

console.log(printArrayVals([1, 2, 3, 5, 23, 20, -2, 4, 5]));

function printMaxOfArray(arr){
    var max = 0;
    for (var i = 0; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(printMaxOfArray([1, 2, 3, 5, 23, 20, -2, 4, 5]));

//algo 6//

function printAverageOfArray(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    sum = sum / arr.length;
    return Math.round(sum);
}
console.log(printAverageOfArray([1, 2, 3, 5, 23, 20, 2, 4, 5]));