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
//algo 5 didn't make it//
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

//algo 7 didn't make it//

function printOdds1To255(){
    var arr = [];
    for (var i = 1; i < 256; i++){
        if (i % 2 != 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(printOdds1To255());

//algo 8//

function rsquareArrayVals(arr){
    var sqdArr = [];
    for (var i = 0; i < arr.length; i++){
        sqdArr.push(arr[i] ** 2);
    }
    return sqdArr;
}
console.log(rsquareArrayVals([1,2,3,4,5,6]));

//algo 9//
function printArrayCountGreaterThanY(arr, y){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            console.log(arr[i]);
        }
    }
}
console.log(printArrayCountGreaterThanY([1,2,3,4,5,6,7], 3));

//algo 10//
function zeroOutArrayNegativeVals(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(zeroOutArrayNegativeVals([1,2,-3,4,-5,6,-7]));

//algo 11//
function printMaxMinAverageArrayVals(arr){
    var max = 0;
    var min = 1;
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
        if (min > arr[i]){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    console.log(max);
    console.log(min);
    console.log(sum / arr.length);
}

console.log(printMaxMinAverageArrayVals([1,2,3,4,5,6,7]));

//algo 12//
function shiftArrayValsLeft(arr){
    arr.shift();
    arr.push(0);
    return arr;
}

console.log(shiftArrayValsLeft([1,2,3,4,5,6,7]));

//algo 13//
function swapStringForArrayNegativeVals(arr){
    for (var i = 0; i < arr.length; i++){
    if (arr[i] < 0){
        arr[i] = 'Dojo'
    }
    console.log(arr);
    }
}

console.log(swapStringForArrayNegativeVals([1,-2,3,-4,5,-6,7]));