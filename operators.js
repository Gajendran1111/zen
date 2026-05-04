// OPERATORS
// ==========

// * Arithmetic Operator

// add +
// sub -
// mul *
// div /
// modulus %
// exponents **
// increment ++
// decrement --

let a = 50;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

let inc = 10;
inc++
console.log(inc);

let dec = 10;
dec--
console.log(dec);


// * Assignment Operators

let c = 10;
c += 10
console.log(c);

// * Comparison Operator

// <
// >
// <=
// >=

let l = 10;
let g = 10;
console.log(l<g);

// * Logical Operators

// && --> and
// || -- or
// ! --> not

let n = 10;
let o = 10;
console.log(n!=o);


// * strict Operators 

// ==  --> double equal/ loose equality
// === --> triple equal / strict equality

let num = 10;
let str = "10";
console.log(num == str);
console.log(num === str);

// * Ternary Operators


// syntax
// variable name = (condition)? "true value" : "false value"


let age = 17;  // --> statement
let result = (age >= 18 && age <=100)? "He is eligible to vote" : "He is not eligible to vote"
console.log(result);


let mark = 5;
let rank = (mark >= 35 || mark <=1)? "pass" : "fail"
console.log(rank);
