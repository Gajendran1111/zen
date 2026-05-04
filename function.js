// function 

// syntax 
// function name (){}


function lp (){
var a = 20;
var a = 25;
console.log(a);

let b = 30;
b = 35;
console.log(b);

const c = 50;
console.log(c);
}
lp();


// Function  statement Declaration  --parameter & argument 

function state (hello){
    console.log(hello)
}
state("hi");

// Function Expression or Anonymous Function 
let fun = function exp (hi){
    console.log(hi)
}
fun("hello java");

//  Anonymous Function 
let funn = function (hi){
    console.log(hi)
}
funn("hello welcome");

// Immediate Invoke Function expression  

(function (iife){
console.log(iife)
})("welcome");

// Arrow Function

// syntax
// ()=>{}

    let arr = (aro)=>{console.log(aro)}
    arr("arrow function")