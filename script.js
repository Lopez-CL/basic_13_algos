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