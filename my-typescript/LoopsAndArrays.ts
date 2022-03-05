console.log("For Loop");
for (let i=0;i<10;i++){
    console.log(i);
}

console.log("For loop-Array of numbers");
let LoopsAndArrays: number[]=[5,5,4.5,1,3];
for (let i=0;i<LoopsAndArrays.length;i++){
    console.log(LoopsAndArrays[i]);
}
let total: number=0;
for(let i=0;i<LoopsAndArrays.length;i++){
    console.log(LoopsAndArrays[i]);
    total+=LoopsAndArrays[i];
}
let average: number=total/LoopsAndArrays.length;
console.log("Review Average = "+average);

