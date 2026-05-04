// for loop 

// syntax 
//for(initialization ,condition ,iteration){};

for(let a = 1;a<=5;a++){
    console.log(a);
}
// while loop

//initialization
//while(condition){
//console.log
//iteration
//}

let i = 1;
while(i<=5){
    console.log(i);
    i++;
}
// do while 

// initilization 
// do {
// log()
// iteration
// }while(condition)

let j = 1;
do{
    console.log(j);
    j++  
}while(j>=5)
// for of 

let days = ["sunday","monday","tuesday","thursday","friday","saturday"]
for(sap of days){
    console.log(sap);
}

// for in 

let obj = {
    name : "balaji",
    place : "chennai",
    age : 25
}
for(js in obj){
    console.log(js+" : " +obj[js]);
}


let nam = "hello java hello"; 
let spl = nam.split(" ");
let count = {}
for(let a = 0;a<spl.length;a++){
    if(count[spl[a]]){
        count[spl[a]] ++
    }else{
        count[spl[a]]=1
    }
}
console.log(count)







