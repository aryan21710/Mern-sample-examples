/*

In below example we need to create a private variable whose value an assignment cant be seen from outside world. 
We create a variable that lives inside the local scope of a function.
The first console.log will print  the function() {return someVar} and not the value which is what we are looking for
To print the actual value we need to use the second console.log

*/
const createPrivateVariable=()=>{
    const someVar="simAr"
    
    return function() {
        return someVar
    }
}

const privateVar=createPrivateVariable()
console.log(`private var is ${privateVar}`)
console.log(`value  of private var is ${privateVar()}`)