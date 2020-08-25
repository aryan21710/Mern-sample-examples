const myObj={
    name: "aryan",
    address: {
        state: "karnataka",
        city: "bangalore",
        address1: {
            apt: "PT",
            aptNo: "16192"
        }
    }
}

/* BELOW METHOD WILL ALSO CHANGE THE ORIGINAL myObj Object while cloning */
// const output={...myObj}
// output.address.city="mumbai"


/* RIGHT OPTION 1 */

// const output= {...myObj, address: {...myObj.address, city:"mumbai"}}

/* RIGHT OPTION 2 */

const output= JSON.parse(JSON.stringify(myObj))
output.address.city="mumbai"




console.log(`myObj ${JSON.stringify(myObj,null,4)}`)
console.log(`output ${JSON.stringify(output,null,4)}`)