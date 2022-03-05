console.log("For Loop");
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("For loop-Array of numbers");
var LoopsAndArrays = [5, 5, 4.5, 1, 3];
for (var i = 0; i < LoopsAndArrays.length; i++) {
    console.log(LoopsAndArrays[i]);
}
var total = 0;
for (var i = 0; i < LoopsAndArrays.length; i++) {
    console.log(LoopsAndArrays[i]);
    total += LoopsAndArrays[i];
}
var average = total / LoopsAndArrays.length;
console.log("Review Average = " + average);
