// array methods


// push 
let arr = [10,20,30,40,50]
arr.push(60)
console.log(arr);

// pop
let arr1 = [10,20,30,40,50]
arr1.pop();
console.log(arr1);

// shift
let arr2 = [10,20,30,40,50]
arr2.shift()
console.log(arr2);

// unshift
let arr3 = [10,20,30,40,50]
arr3.unshift(9)
console.log(arr3);

// splice

//syntax
// variable name.splice(index,splice num,value)

let days = ["sunday","monday","tuesday","thursday","friday","saturday"]
days.splice(3,1,"wednesday")
console.log(days);


// sort

let abc = ["c","a","d","b","f","e"]
console.log(abc.sort().reverse());
