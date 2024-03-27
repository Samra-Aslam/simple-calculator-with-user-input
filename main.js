"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var n1 = parseInt(prompt("Enter your 1st number"));
var n2 = parseInt(prompt("Enter your 2st number"));
var operator = (prompt("Enter operator ,(+ ,- ,*,/) "));
if (operator = "+") {
    console.log("the answer of addition is : ".concat(n1 + n2));
}
if (operator = "-") {
    console.log("the answer of substraction is : ".concat(n1 - n2));
}
if (operator = "*") {
    console.log("the answer of multiplication  is : ".concat(n1 * n2));
}
if (operator = "/") {
    console.log("the answer of division is : ".concat(n1 / n2));
}
else {
    console.log("invalid operator");
}
