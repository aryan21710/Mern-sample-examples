const secretPassword=()=>{
    let password='12345' 
            // return value===password ? true : false

    return {
        myfunc: (value)=>{
            return value===password ? true : false
        }
    } 

}


const output=secretPassword()
console.log(`output ${output.myfunc('12345') }`)