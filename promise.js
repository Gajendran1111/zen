// promise

// syntax
// return new Promise((resolve, reject) => {})

    function go (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shop = false;
                if(shop){
                    resolve("I am going to the shop")
                }else{
                    reject("I am not going to the shop")
                }
            },5000);
        })
    }
    function buy (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let product = true;
                if(product){
                    resolve("I am buying the product")
                }else{
                    reject("I am not buying the product")
                }
            },2000);
        })
    }
    function change (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let get = false;
                if(get){
                    resolve("I am collect the changes")
                }else{
                    reject("I am not collect the changes")
                }
            },1000);
        })
    }
    function back (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let home = true;
                if(home){
                    resolve("I am back to home")
                }else{
                    reject("I am not come back to home")
                } 
            },5000);
        })
    }
async function box() {
    try {
        const a = await go();
    console.log(a);
    const b = await buy();
    console.log(b);
    const c = await change();
    console.log(c);
    const d = await back();
    console.log(d)
    } catch (e) {  
        console.log(e);
    }
}
box();