function add(num1:number,num2:number){
    return num1+num2;
}

function printResult(num:number){
    console.log('Result: '+num);
}

function addHandle(num1: number, num2: number,cb:(num:number) => void) {
  const result =  num1 + num2;
  cb(result);
}

printResult(add(4,44));

// let combineValues:Function;
let combineValues:(a:number,b:number) => number;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(4,4));

addHandle(10,20,(result)=>{
    console.log(result);
})

