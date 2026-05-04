// map

// synatx
// variable name.map((value, index,accumulator)=>)

    let arr = [10,20,30,40,50]
    let res = arr.map((v,i,a)=>v*5)
    console.log(res);
    
// filter
// synatx
// variable name.filter((value, index,accumulator)=>)

let fil = [2,5,5,5,56,5,654,65,65,6,65,98,95,+98,5,65,65,8,898,12]
let res2 = fil.filter((x,y,z)=>y>=7)
console.log(res2);


// reduce
// syntax
// variable name.reduce((accumulator,acctualarray)=>)

    let red = [10,20,30,40]
    let res3 = red.reduce((i,j)=>i-j)
    console.log(res3);
    
let task = "hello java welcome"
let ress = task.split(" ").map(v=>v.charAt(0).toUpperCase()+v.slice(1))
console.log(ress.join(" "));

