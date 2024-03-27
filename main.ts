
var prompt= require("prompt-sync")();
let n1  = parseInt(prompt("Enter your 1st number"));
let n2 = parseInt(prompt("Enter your 2st number"));
let operator= (prompt("Enter operator ,(+ ,- ,*,/) "));

if(operator= " + " ){
    console.log(`the answer of addition is : ${n1 + n2}`);

}
if(operator=" - "){
    console.log(`the answer of substraction is : ${n1 - n2}`);
}

if(operator=" * "){
    console.log(`the answer of multiplication  is : ${n1 * n2}`);
}

if(operator=" / "){
    console.log(`the answer of division is : ${n1 / n2}`);

}else{
    console.log("invalid operator")
}
export{};